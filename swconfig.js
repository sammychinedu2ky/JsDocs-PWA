importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([]);
  workbox.routing.registerRoute(
    /.*.(?:png|txt|json|markdown|css|js)/,
    workbox.strategies.cacheFirst({
      cacheName: 'time-controlled',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 10 * 24 * 60 * 60, 
        })
      ]
    })
  );
} else {
  console.log(`yikes`);
}