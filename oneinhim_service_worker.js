const ONEINHIM_CACHE = "oneinhim-app-v3";

const APP_SHELL = [
  "./",
  "./index.html",
  "./oneinhim_learner_app.html",
  "./oneinhim_content_workshop.html",
  "./oneinhim_team_sync_config.js",
  "./oneinhim_content_packages.json",
  "./oneinhim_content_tagging_schema.json",
  "./assets/oneinhim-logo-primary.jpg",
  "./assets/oneinhim-characters-international.png",
  "./assets/oneinhim-characters-dutch.png",
  "./assets/outoftheshadows-brenda-hero.png",
  "./assets/one-basics-1-1-eternal-life-course-cover.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(ONEINHIM_CACHE)
      .then((cache) => Promise.allSettled(APP_SHELL.map((url) =>
        fetch(url).then((response) => {
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

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

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
