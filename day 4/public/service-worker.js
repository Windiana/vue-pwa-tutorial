var CACHE_STATIC_NAME = 'static-files-v18'
var CACHE_DYNAMIC_NAME = 'dynamic-files-v10'

importScripts('/src/js/idb.js')

var dbPromise = idb.open('tasks-db', 1, function(db) {
  if (!db.objectStoreNames.contains('task')) {
    db.createObjectStore('task', {keyPath: 'id'});
  }
})

// Listen for install event, set callback
self.addEventListener('install', function(event) {
  // Perform some task
  console.log('[Service worker] 456 install...')

  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[Service Worker] precache static files...')

        cache.addAll([
          '/',
          '/index.html',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          '/src/css/simple-sidebar.css',
          '/src/css/custom.css',
          '/src/images/favicon.ico',
          '/manifest.json',
          '/src/js/jquery.min.js',
          '/src/js/bootstrap.min.js',
          '/src/js/main.js',
          '/src/js/custom.js',
          '/src/js/idb.js',
          '/src/images/banner.jpg'
        ])

        self.skipWaiting()
      })
  )
  
});

self.addEventListener('activate', function(event) {
  // Perform some task
  console.log('[Service worker] activate...')

  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if(key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] delete old cache..')
            return caches.delete(key)
          }
        }))
      })
  )

  return self.clients.claim()
});


self.addEventListener('fetch', function(event) {
  var url = 'https://vue-pwa-tutor.firebaseio.com/tasks.json'
  if(event.request.url == url) {
    event.respondWith(
      fetch(event.request)
        .then(function(res) {
          // return caches.open(CACHE_DYNAMIC_NAME)
          //   .then(function(cache) {
          //     cache.put(event.request.url, res.clone())
          //     return res
          //   })

          var clonedRes = res.clone()
          clonedRes.json()
            .then(function(data) {
              dbPromise.then(function(db) {
                var tx = db.transaction(['task'], 'readwrite');
                var store = tx.objectStore('task');
                
                for(var key in data) {
                  store.put(data[key]);
                }
                
                return tx.complete;
              });
              
            })
          
          return res;

        })
        .catch(function() {
          return caches.match(event.request)
        })
    )
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if(response) {
            return response
          } else {

            // make it dynamic cache
            return fetch(event.request)
              .then(function(res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function(cache) {
                    cache.put(event.request.url, res.clone())
                    return res
                  })
              })
              .catch(function() {
                return caches.open(CACHE_STATIC_NAME)
                  .then(function(cache) {
                    return cache.match('/offline.html')
                  })
              })
          }
        })
    )
  }
})

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request)
//       .then(function(res) {
//         return caches.open(CACHE_DYNAMIC_NAME)
//           .then(function(cache) {
//             cache.put(event.request.url, res.clone())
//             return res
//           })
//       })
//       .catch(function() {

//         return caches.match(event.request)
//       })
//   )
// })


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if(response) {
//           return response
//         } else {

//           // make it dynamic cache
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone())
//                   return res
//                 })
//             })
//             .catch(function() {
//               return caches.open(CACHE_STATIC_NAME)
//                 .then(function(cache) {
//                   return cache.match('/offline.html')
//                 })
//             })
//         }
//       })
//   )
// })