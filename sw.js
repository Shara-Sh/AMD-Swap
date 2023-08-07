self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("sw-cache").then(function(cache) {
            return cache.addAll([
                "/AMD-Swap/index.html",
                "/AMD-Swap/styles.css",
                "/AMD-Swap/app.js",
            ]);
        })
    );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Clean up old caches if needed
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});