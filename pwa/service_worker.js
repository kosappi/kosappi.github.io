const CACHE_NAME = 'pwa-sample-caches';
const urlsToCache = [
    '/kosappi.net/',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                return response ? response : fetch(event.request);
            })
    );
});
