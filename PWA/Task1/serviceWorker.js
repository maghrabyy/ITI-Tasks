const filesToCache = [
    'index.html',
    'notfound.html',
    'offline.html'
]
const staticCacheName='pages'

self.addEventListener('install',event=>{
    console.log('service worker installation....')
    event.waitUntil(
        //open or create        
        caches.open(staticCacheName)
        .then(cache=>{
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('activate',event=>{
    console.log('service worker activation')
})


self.addEventListener('fetch', event => {
    console.log(`fetching :: ${event.request.url}`);
    
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                console.log(`Found request ${event.request.url} in cache`);
                return response;
            }
            return fetch(event.request).then(networkResponse => {
                if (networkResponse.status === 404) {
                    console.log('Page not found, serving notfound.html');
                    return caches.match('/notfound.html'); 
                }
                return networkResponse;
            }).catch(err => {
                console.log('Fetch failed, serving offline fallback page', err);
                return caches.match('/offline.html'); 
            });
        })
    );
});