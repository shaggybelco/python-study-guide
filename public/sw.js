// Service Worker — full offline support for the entire app + Pyodide

const APP_CACHE = 'pysg-app-v1';
const PYODIDE_CACHE = 'pysg-pyodide-v1';
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then(cache =>
      // Pre-cache the app shell — the entry point
      cache.add('/')
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clean up old caches when a new version of the SW activates
  const keepCaches = [APP_CACHE, PYODIDE_CACHE];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !keepCaches.includes(k)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // ── PYODIDE CDN — cache-first (large files, never change) ──────────────
  if (url.startsWith(PYODIDE_CDN)) {
    event.respondWith(
      caches.open(PYODIDE_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // ── APP ASSETS (same-origin) — network-first, fallback to cache ────────
  // This ensures users always get the latest version when online,
  // but the app still works fully when offline.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful responses for offline use
          if (response.ok) {
            const clone = response.clone();
            caches.open(APP_CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() =>
          // Network failed — serve from cache
          caches.match(event.request).then(cached => {
            if (cached) return cached;
            // For navigation requests, return the cached index.html (SPA fallback)
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            return new Response('Offline', { status: 503, statusText: 'Offline' });
          })
        )
    );
    return;
  }
});
