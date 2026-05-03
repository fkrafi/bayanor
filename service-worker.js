---
layout: null
permalink: /service-worker.js
---

const CACHE_NAME = 'bayanor-v1';
const urlsToCache = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/about/',
  '{{ site.baseurl }}/products/',
  '{{ site.baseurl }}/contact/',
  '{{ site.baseurl }}/assets/css/style.css',
  '{{ site.baseurl }}/assets/js/script.js'
];

// Install event — cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event — clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event — serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Offline fallback — could serve a generic offline page here
        return caches.match('{{ site.baseurl }}/');
      });
    })
  );
});
