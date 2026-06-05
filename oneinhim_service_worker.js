const ONEINHIM_CACHE = "oneinhim-app-v96";

const APP_SHELL = [
  "./oneinhim.webmanifest",
  "./oneinhim_team_sync_config.js",
  "./oneinhim_content_packages.json",
  "./oneinhim_content_tagging_schema.json",
  "./assets/oneinhim-logo-primary.jpg",
  "./assets/oih-logo-symbol.png",
  "./assets/oih-logo-2023-orange.png",
  "./assets/oneinhim-characters-international.png",
  "./assets/oneinhim-characters-dutch.png",
  "./assets/outoftheshadows-brenda-hero.png",
  "./assets/outoftheshadows-brenda-mobile-hero.jpg",
  "./assets/outoftheshadows-brenda-hero-v4.jpg",
  "./assets/outoftheshadows-brenda-mobile-hero-v4.jpg",
  "./assets/one-basics-1-1-eternal-life-mobile-hero.png",
  "./assets/one-basics-1-1-eternal-life-mobile-hero-v3.jpg",
  "./assets/one-basics-1-1-eternal-life-desktop-hero-v3.jpg",
  "./assets/one-basics-1-1-eternal-life-course-cover.png",
  "./assets/one-gospel-podcast-cover.png",
  "./assets/oneevent-ps-duane-friday-cover.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(ONEINHIM_CACHE)
      .then((cache) => Promise.allSettled(APP_SHELL.map((url) =>
        fetch(url, { cache: "reload" }).then((response) => {
          if (response.ok) return cache.put(url, response);
          return null;
        }).catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key !== ONEINHIM_CACHE)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(
      fetch(request, { cache: "reload" })
        .then((response) => {
          const copy = response.clone();
          caches.open(ONEINHIM_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./oneinhim_learner_app.html") || caches.match("./")))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(ONEINHIM_CACHE).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match("./")))
  );
});
