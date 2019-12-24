importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "66de6eb737ef073e8ca872aeda1fe003"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "c564f5bb83400335ee41bdba48130fae"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "ce43b413d1f709b91f622502b083ae5b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6e500821074250590b1c58d758f55a57"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "88eac9616212086f2c24a4f218c87aa7"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6bac763538c9ed20644e815efbb2992c"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "831ea48210c83925a6ec5e50a1ef5993"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "e42b0e8031b6719653a467941dda90f6"
  },
  {
    "url": "index.html",
    "revision": "5ab20da7aad8fe36cfc6239e7803fcca"
  },
  {
    "url": "license.txt",
    "revision": "023f930be6007a1a487f65cb69ce62c5"
  },
  {
    "url": "manifest.json",
    "revision": "bd95111f9a731166d37975cb2f9a2420"
  },
  {
    "url": "README.markdown",
    "revision": "8d8203473e40e5ad94fb4606ee48b8cd"
  },
  {
    "url": "src/index.html",
    "revision": "95414acefe1989db82cf3c24605a797f"
  },
  {
    "url": "src/style.css",
    "revision": "4966daaf301d4b7efe95ed2791e79cdd"
  },
  {
    "url": "style.css",
    "revision": "80986773005b2f2f167795a740afecd1"
  },
  {
    "url": "swconfig.js",
    "revision": "e14a503ed5a1e30383d5c776166501d7"
  },
  {
    "url": "workbox-config.js",
    "revision": "7a9521618c65919a1e533c52afe7547f"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}