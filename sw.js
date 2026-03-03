// sw.js
const CACHE_NAME = 'fast-reader-cache-v1';

const urlsToCache = [
  '/fast-reader/',
  '/fast-reader/index.html',
  '/fast-reader/icon-192.png',
  '/fast-reader/icon-512.png'
];
// Событие install срабатывает при первой установке Service Worker.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});
// Событие fetch перехватывает все сетевые запросы, которые делает приложение.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});