// Simple service worker for caching static assets
const CACHE_NAME = "portfolio-v1";
const BASE_URL = "/portfolio/"; // Match the base URL from vite.config.ts
const urlsToCache = [
  BASE_URL,
  BASE_URL + "assets/fonts/tomorrow.css",
  BASE_URL + "assets/fonts/tomorrow-400-normal-latin.woff2",
  BASE_URL + "assets/fonts/tomorrow-500-normal-latin.woff2",
  BASE_URL + "assets/fonts/tomorrow-700-normal-latin.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});
