#!/usr/bin/env python3
import json
import os
import base64
import re
import shutil
import subprocess
import time
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PUBLIC_REPO = Path(os.environ.get(
    "ONEINHIM_PUBLIC_REPO",
    str(Path.home() / ".oneinhim" / "oneinhim-learner-public-update"),
))
PUBLIC_REMOTE = os.environ.get(
    "ONEINHIM_PUBLIC_REMOTE",
    "https://github.com/jadon-debug/oneinhim-learner-public.git",
)
PUBLIC_BASE_URL = os.environ.get(
    "ONEINHIM_PUBLIC_BASE_URL",
    "https://jadon-debug.github.io/oneinhim-learner-public",
).rstrip("/")
PORT = int(os.environ.get("ONEINHIM_PUBLISH_PORT", "8777"))
ASSET_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}

STATIC_FILES = [
    "oneinhim_learner_app.html",
    "oneinhim_admin_workshop.html",
    "oneinhim_service_worker.js",
    "oneinhim.webmanifest",
    "oneinhim_team_sync_config.js",
    "oneinhim_content_packages.json",
    "oneinhim_home_layout.js",
    "oneinhim_journey_layout.js",
    "oneinhim_mux_import_queue.js",
    "oneinhim_publish_server.py",
    "start_oneinhim_publish_helper.command",
]

VERSIONED_FILE_RE = re.compile(r"oneinhim_(?:cache_reset|learner_app)_v\d+\.html")


def write_layout_file(filename, global_name, payload):
    target = ROOT / filename
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    target.write_text(f"window.{global_name} = {body};\n", encoding="utf-8")


def read_release_version():
    html = (ROOT / "oneinhim_learner_app.html").read_text(encoding="utf-8")
    match = re.search(r'APP_RELEASE_VERSION\s*=\s*"(\d+)"', html)
    if not match:
        raise RuntimeError("Could not find app release version.")
    return int(match.group(1))


def replace_text(path, replacements):
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    for pattern, value in replacements:
        text = re.sub(pattern, value, text)
    path.write_text(text, encoding="utf-8")


def bump_release_version():
    next_version = read_release_version() + 1
    next_text = str(next_version)
    previous_reset_files = sorted(ROOT.glob("oneinhim_cache_reset_v*.html"))
    reset_template = previous_reset_files[-1] if previous_reset_files else None

    html_replacements = [
        (r'APP_RELEASE_VERSION\s*=\s*"\d+"', f'APP_RELEASE_VERSION = "{next_text}"'),
        (r'oneinhim_home_layout\.js\?v=\d+', f'oneinhim_home_layout.js?v={next_text}'),
        (r'oneinhim_journey_layout\.js\?v=\d+', f'oneinhim_journey_layout.js?v={next_text}'),
    ]
    admin_replacements = [
        (r'oneinhim_home_layout\.js\?v=\d+', f'oneinhim_home_layout.js?v={next_text}'),
        (r'oneinhim_mux_import_queue\.js\?v=\d+', f'oneinhim_mux_import_queue.js?v={next_text}'),
        (r'oneinhim_cache_reset_v\d+\.html', f'oneinhim_cache_reset_v{next_text}.html'),
    ]
    replace_text(ROOT / "oneinhim_learner_app.html", html_replacements)
    replace_text(ROOT / "oneinhim_admin_workshop.html", admin_replacements)
    replace_text(ROOT / "oneinhim_service_worker.js", [
        (r'oneinhim-app-v\d+', f'oneinhim-app-v{next_text}'),
        (r'oneinhim_cache_reset_v\d+\.html', f'oneinhim_cache_reset_v{next_text}.html'),
    ])
    replace_text(ROOT / "oneinhim.webmanifest", [
        (r'oneinhim_cache_reset_v\d+\.html', f'oneinhim_cache_reset_v{next_text}.html'),
    ])

    if reset_template:
        next_reset = ROOT / f"oneinhim_cache_reset_v{next_text}.html"
        shutil.copy2(reset_template, next_reset)
        replace_text(next_reset, [
            (r'v=\d+', f'v={next_text}'),
            (r'oneinhim_cache_reset_v\d+\.html', f'oneinhim_cache_reset_v{next_text}.html'),
        ])
    shutil.copy2(ROOT / "oneinhim_learner_app.html", ROOT / f"oneinhim_learner_app_v{next_text}.html")
    return next_text


def safe_asset_name(filename):
    raw_name = Path(str(filename or "cover")).name
    stem = Path(raw_name).stem
    suffix = Path(raw_name).suffix.lower()
    if suffix not in ASSET_EXTENSIONS:
        raise RuntimeError("Choose a JPG, PNG, WebP, GIF, or AVIF image.")
    clean_stem = re.sub(r"[^A-Za-z0-9._-]+", "-", stem).strip("-._") or "cover"
    return f"{clean_stem}{suffix}"


def write_uploaded_asset(payload):
    filename = safe_asset_name(payload.get("filename"))
    encoded = str(payload.get("data") or "")
    if "," in encoded:
        encoded = encoded.split(",", 1)[1]
    try:
        data = base64.b64decode(encoded, validate=True)
    except Exception:
        raise RuntimeError("The uploaded image data could not be read.")
    if not data:
        raise RuntimeError("The uploaded image was empty.")
    if len(data) > 12 * 1024 * 1024:
        raise RuntimeError("Image is too large. Use a cover under 12 MB.")
    assets_dir = ROOT / "assets"
    assets_dir.mkdir(exist_ok=True)
    target = assets_dir / filename
    if target.exists():
        stem = target.stem
        suffix = target.suffix
        counter = 2
        while target.exists():
            target = assets_dir / f"{stem}-{counter}{suffix}"
            counter += 1
    target.write_bytes(data)
    return f"assets/{target.name}"


def run_command(args, cwd=None):
    result = subprocess.run(
        args,
        cwd=cwd,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        message = (result.stderr or result.stdout or "Command failed.").strip()
        raise RuntimeError(message)
    return result.stdout.strip()


def ensure_public_repo():
    git_dir = PUBLIC_REPO / ".git"
    if not git_dir.exists():
        if PUBLIC_REPO.exists():
            shutil.rmtree(PUBLIC_REPO)
        PUBLIC_REPO.parent.mkdir(parents=True, exist_ok=True)
        run_command(["git", "clone", PUBLIC_REMOTE, str(PUBLIC_REPO)])
    else:
        run_command(["git", "fetch", "origin", "main"], cwd=PUBLIC_REPO)
        run_command(["git", "checkout", "main"], cwd=PUBLIC_REPO)
        run_command(["git", "pull", "--ff-only", "origin", "main"], cwd=PUBLIC_REPO)


def copy_to_public_repo():
    ensure_public_repo()
    for name in STATIC_FILES:
      source = ROOT / name
      if source.exists():
          shutil.copy2(source, PUBLIC_REPO / name)
    for source in ROOT.glob("oneinhim_cache_reset_v*.html"):
        shutil.copy2(source, PUBLIC_REPO / source.name)
    for source in ROOT.glob("oneinhim_learner_app_v*.html"):
        shutil.copy2(source, PUBLIC_REPO / source.name)
    assets_source = ROOT / "assets"
    assets_target = PUBLIC_REPO / "assets"
    if assets_source.exists():
        assets_target.mkdir(exist_ok=True)
        for source in assets_source.iterdir():
            if source.is_file() and source.suffix.lower() != ".psd":
                shutil.copy2(source, assets_target / source.name)


def git(args):
    return run_command(["git", *args], cwd=PUBLIC_REPO)


def public_app_url(version):
    return f"{PUBLIC_BASE_URL}/oneinhim_cache_reset_v{version}.html?auto=1&v={version}"


def public_learner_url(version):
    return f"{PUBLIC_BASE_URL}/oneinhim_learner_app.html?v={version}&verify={int(time.time())}"


def verify_live_version(version, attempts=9, delay=2.0):
    expected = f'APP_RELEASE_VERSION = "{version}"'
    url = public_learner_url(version)
    last_error = ""
    for attempt in range(attempts):
        try:
            request = urllib.request.Request(
                url,
                headers={
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                    "User-Agent": "OneInHimPublisher/1.0",
                },
            )
            with urllib.request.urlopen(request, timeout=8) as response:
                body = response.read().decode("utf-8", errors="replace")
            if expected in body:
                return {"ok": True, "url": public_app_url(version), "attempts": attempt + 1}
            last_error = f"GitHub Pages answered, but not with v{version} yet."
        except (urllib.error.URLError, TimeoutError, OSError) as error:
            last_error = str(error)
        if attempt < attempts - 1:
            time.sleep(delay)
    return {"ok": False, "url": public_app_url(version), "error": last_error}


def publish(payload):
    home_layout = payload.get("homeLayout")
    journey_layout = payload.get("journeyLayout")
    content_packages = payload.get("contentPackages")
    if not isinstance(home_layout, dict) or not isinstance(home_layout.get("heroSlides"), list):
        raise RuntimeError("Home layout is missing hero slides.")
    if not isinstance(home_layout.get("shelves"), list):
        raise RuntimeError("Home layout is missing shelves.")
    if not isinstance(journey_layout, dict) or not isinstance(journey_layout.get("sections"), list):
        raise RuntimeError("Journey layout is missing sections.")
    if content_packages is not None and not isinstance(content_packages, list):
        raise RuntimeError("Content packages must be a list.")

    write_layout_file("oneinhim_home_layout.js", "ONEINHIM_PUBLISHED_HOME_CONTENT", home_layout)
    write_layout_file("oneinhim_journey_layout.js", "ONEINHIM_PUBLISHED_JOURNEY_WORKFLOW", journey_layout)
    if isinstance(content_packages, list):
        (ROOT / "oneinhim_content_packages.json").write_text(
            json.dumps(content_packages, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
    next_version = bump_release_version()
    copy_to_public_repo()

    versioned_files = [path.name for path in PUBLIC_REPO.iterdir() if VERSIONED_FILE_RE.fullmatch(path.name)]
    git(["add", *STATIC_FILES, *versioned_files, "assets"])
    status = git(["status", "--porcelain"])
    if not status:
        live = verify_live_version(next_version, attempts=3, delay=1.0)
        return {
            "version": next_version,
            "url": public_app_url(next_version),
            "commit": git(["rev-parse", "--short", "HEAD"]),
            "verified": live["ok"],
            "verifyError": live.get("error", ""),
            "message": "Nothing changed; GitHub is already up to date.",
        }
    git(["commit", "-m", "Publish admin workspace update"])
    commit = git(["rev-parse", "--short", "HEAD"])
    git(["push", "origin", "main"])
    live = verify_live_version(next_version)
    return {
        "version": next_version,
        "url": public_app_url(next_version),
        "commit": commit,
        "verified": live["ok"],
        "verifyError": live.get("error", ""),
        "message": (
            f"Published v{next_version} and verified live."
            if live["ok"]
            else f"Published v{next_version}; GitHub Pages is still updating."
        ),
    }


class PublishHandler(BaseHTTPRequestHandler):
    def send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_json(200, {"ok": True})

    def do_GET(self):
        self.send_json(200, {
            "ok": True,
            "message": "One In Him publisher is running.",
            "version": read_release_version(),
            "publicBaseUrl": PUBLIC_BASE_URL,
            "publicRepo": str(PUBLIC_REPO),
        })

    def do_POST(self):
        if self.path not in {"/publish", "/upload-asset"}:
            self.send_json(404, {"ok": False, "error": "Unknown publish endpoint."})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            if self.path == "/upload-asset":
                path = write_uploaded_asset(payload)
                self.send_json(200, {"ok": True, "path": path, "message": "Cover uploaded."})
            else:
                result = publish(payload)
                self.send_json(200, {"ok": True, **result})
        except Exception as error:
            self.send_json(500, {"ok": False, "error": str(error)})

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), PublishHandler)
    print(f"One In Him publisher running at http://localhost:{PORT}")
    server.serve_forever()
