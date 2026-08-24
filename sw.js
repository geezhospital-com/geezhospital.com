/* ══════════════════════════════════════════════════════════════
   GEEZ HOSPITAL — sw.js  (Service Worker)
   ──────────────────────────────────────────────────────────────
   Purpose: let the site be added to a phone's home screen and
   load instantly on repeat visits or a weak connection.

   Strategy (deliberately conservative — patient-facing medical
   info should never be stuck showing stale content):
     • Pages (HTML)      → network-first, cache as a fallback only
       for when the connection drops. Visitors always get the
       latest schedule/contact info when online.
     • Static assets
       (css/js/images)   → cache-first, since these rarely change
       and benefit the most from instant loading.

   Bump CACHE_VERSION any time the CORE_ASSETS list changes, so
   old caches are cleaned up automatically on the next visit.
   ══════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'geez-hospital-v2';

/* Only list files that definitely exist at these paths — an
   addAll() call fails entirely if even one URL 404s, so keep
   this list to the handful of assets every page depends on. */
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js'
];

/* ── INSTALL — pre-cache the core shell ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CORE_ASSETS))
      .catch(err => console.warn('[SW] Pre-cache skipped some assets:', err))
  );
  self.skipWaiting();
});

/* ── ACTIVATE — drop any caches from a previous version ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── FETCH ── */
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return; /* never intercept POST (e.g. appointment form) */

  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    /* Network-first for pages */
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then(cached => cached || caches.match('/index.html'))
        )
    );
  } else {
    /* Cache-first for static assets */
    event.respondWith(
      caches.match(req).then(cached =>
        cached || fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, copy));
          return res;
        })
      )
    );
  }
});
