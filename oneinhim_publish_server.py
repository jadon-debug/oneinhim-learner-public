#!/usr/bin/env python3
import json
import os
import base64
import re
import shutil
import subprocess
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PUBLIC_REPO = Path(os.environ.get("ONEINHIM_PUBLIC_REPO", "/tmp/oneinhim-learner-public-update"))
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
]


def write_layout_file(filename, global_name, payload):
    target = ROOT / filename
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    target.write_text(f"window.{global_name} = {body};\n", encoding="utf-8")


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


def copy_to_public_repo():
    if not PUBLIC_REPO.exists():
        raise RuntimeError(f"Public repo was not found at {PUBLIC_REPO}")
    for name in STATIC_FILES:
      source = ROOT / name
      if source.exists():
          shutil.copy2(source, PUBLIC_REPO / name)
    assets_source = ROOT / "assets"
    assets_target = PUBLIC_REPO / "assets"
    if assets_source.exists():
        assets_target.mkdir(exist_ok=True)
        for source in assets_source.iterdir():
            if source.is_file() and source.suffix.lower() != ".psd":
                shutil.copy2(source, assets_target / source.name)


def git(args):
    result = subprocess.run(
        ["git", *args],
        cwd=PUBLIC_REPO,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        message = (result.stderr or result.stdout or "Git command failed.").strip()
        raise RuntimeError(message)
    return result.stdout.strip()


def publish(payload):
    home_layout = payload.get("homeLayout")
    journey_layout = payload.get("journeyLayout")
    if not isinstance(home_layout, dict) or not isinstance(home_layout.get("heroSlides"), list):
        raise RuntimeError("Home layout is missing hero slides.")
    if not isinstance(home_layout.get("shelves"), list):
        raise RuntimeError("Home layout is missing shelves.")
    if not isinstance(journey_layout, dict) or not isinstance(journey_layout.get("sections"), list):
        raise RuntimeError("Journey layout is missing sections.")

    write_layout_file("oneinhim_home_layout.js", "ONEINHIM_PUBLISHED_HOME_CONTENT", home_layout)
    write_layout_file("oneinhim_journey_layout.js", "ONEINHIM_PUBLISHED_JOURNEY_WORKFLOW", journey_layout)
    copy_to_public_repo()

    git(["add", *STATIC_FILES, "assets"])
    status = git(["status", "--porcelain"])
    if not status:
        return "Nothing changed; GitHub is already up to date."
    git(["commit", "-m", "Publish admin workspace update"])
    git(["push", "origin", "main"])
    return "Published to GitHub. Refresh the phone link in a minute."


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
        self.send_json(200, {"ok": True, "message": "One In Him publisher is running."})

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
                message = publish(payload)
                self.send_json(200, {"ok": True, "message": message})
        except Exception as error:
            self.send_json(500, {"ok": False, "error": str(error)})

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), PublishHandler)
    print(f"One In Him publisher running at http://localhost:{PORT}")
    server.serve_forever()
