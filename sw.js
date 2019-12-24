let CACHE =
{name:'javascript docs'} 
/*self.addEventListener('install', function(e) {
  self.skipWaiting();
 e.waitUntil(
   caches.open(CACHE.name).then(function(cache) {
     return cache.addAll([
       '/video-store-offline/',
       '/video-store-offline/index.html',
       '/video-store-offline/index.js',
       '/video-store-offline/style.css'
     ]);
   })
 );
});*/
self.addEventListener('install', async event => {
  self.skipWaiting();
  try {
    let cache = await caches.open(CACHE.name);
    
   cache.addAll([
       '/index.html',
       '/index.js',
      '/style.css',
      '/images\icons\icon-72x72.png',
      '/images\icons\icon-96x96.png',
      '/images\icons\icon-128x128.png',
      '/images\icons\icon-144x144.png',
      '/images\icons\icon-152x152.png',
      '/images\icons\icon-192x192.png',
      '/images\icons\icon-384x384.png',
      '/images\icons\icon-512x512.png'
      
    ])
    console.log( cache)
  }
  catch (err) {
    console.error("An error occured", err)
  }
})

/*self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keyArr => {
        keyArr
          .filter(keys => keys !== name)
          .map(oldKey => caches.delete(oldKey))
      })
  )
})*/

self.addEventListener('activate', async event => {
 
  const keys = await caches.keys();
  keys.map(key =>key!=CACHE.name? caches.delete(key):'');
 
})

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      
      return response || fetch(e.request);
    }).then(fetchResponse=>caches.open(CACHE.name).then(cache=>{
      cache.put(e.request.url,fetchResponse.clone())
      return fetchResponse
    }))
  );
});


