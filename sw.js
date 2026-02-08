// Service Worker para PWA
const CACHE_NAME = 'magic-chat-v2';
const urlsToCache = [
  '/magic/',
  '/magic/index.html',
  '/magic/manifest.json',
  '/magic/magic-icon-192.png',
  '/magic/magic-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
