/* eslint-disable no-restricted-globals */
const CACHE_NAME = "Food-app-cache-v2";
const urlsToCache = [
  "/", 
  "/index.html", 
  "/offline.html"
];

self.addEventListener("install", (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache:", CACHE_NAME);
      return cache.addAll(urlsToCache).then(() => {
        console.log('All resources have been fetched and cached.');
      }).catch((error) => {
        console.error('Failed to cache:', error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Serving from cache:', event.request.url);
        return response;
      }
      return fetch(event.request).then((fetchResponse) => {
        if (!fetchResponse || fetchResponse.status !== 200) {
          return fetchResponse;
        }
        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
          console.log('Caching new resource:', event.request.url);
        });
        return fetchResponse;
      });
    }).catch(() => {
      console.log('Fetch failed, serving offline page.');
      return caches.match("/offline.html");
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve(); // Return a resolved promise when not deleting
        })
      );
    })
  );
});

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
        });
    });
  }
}
