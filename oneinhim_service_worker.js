const ONEINHIM_CACHE = "oneinhim-app-v207";

const APP_SHELL = [
  "./oneinhim.webmanifest",
  "./oneinhim_team_sync_config.js",
  "./oneinhim_home_layout.js",
  "./oneinhim_journey_layout.js",
  "./oneinhim_mux_import_queue.js",
  "./oneinhim_content_packages.json",
  "./oneinhim_content_tagging_schema.json",
  "./assets/oneinhim-logo-primary.jpg",
  "./assets/oih-logo-symbol.png",
  "./assets/oih-logo-2023-orange.png",
  "./assets/oneinhim-characters-international.png",
  "./assets/oneinhim-characters-dutch.png",
  "./assets/one-basics-1-1-eternal-life-desktop-hero-mobile.webp",
  "./assets/one-basics-1-1-eternal-life-desktop-hero-v3.jpg",
  "./assets/one-basics-1-1-eternal-life-course-cover.png",
  "./assets/outoftheshadows_documentary_hero_mobile.webp",
  "./assets/outoftheshadows_documentary-coverart_16x9.webp",
  "./assets/outoftheshadows_documentary-coverart.webp",
  "./assets/oneinhim-journey-hero-custom-mobile.webp",
  "./assets/oneinhim-journey-hero-custom-desktop.webp",
  "./assets/one-gospel-podcast-cover.png",
  "./assets/death-of-ivan-ilyich-classics-audiobook-cover.jpg",
  "./assets/OE_May_PsDuaneS_friday.webp",
  "./assets/OE_May_JohanToet_friday.webp",
  "./assets/OE_May_JohanToet_saturday2.webp",
  "./assets/OE_May_Duanesheriff_saturday2.webp"
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
  const isWorkshopDocument =
    url.pathname.endsWith("/oneinhim_admin_workshop.html") ||
    url.pathname.endsWith("oneinhim_admin_workshop.html") ||
    url.pathname.endsWith("/oneinhim_cache_reset.html") ||
    url.pathname.endsWith("oneinhim_cache_reset.html") ||
    url.pathname.endsWith("/oneinhim_cache_reset_v207.html") ||
    url.pathname.endsWith("oneinhim_cache_reset_v207.html");

  if (isWorkshopDocument) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

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
