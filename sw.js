self.addEventListener('install', e => {
  e.waitUntil(caches.open('scull-v1').then(c => c.addAll(['./','./index.html','./offline.html'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(()=> caches.match(e.request).then(r => r || caches.match('./offline.html'))));
});
