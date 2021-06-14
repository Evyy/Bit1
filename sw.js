const version = '';


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        'index.html',
		'calc1.html',
		'info.html',
		'quiz.html',
		'bit.css'
		'calc1.css'
		'info.css'
        'quiz.css',
        'bit.js',
		'calc1.js',
		'quiz.js',
        'notfound.txt',
        'package.json',
        'server.js',
		'images/1.jpeg',
		'images/2.jpeg',
	    'images/3.jpeg',
		'images/4.jpeg',
	    'images/5.jpeg',
	    'images/6.png',
	    'images/7.jpeg',
	    'images/8.jpeg',
    	'images/9.png',
	    'images/10.jpeg',
		'images/11.jpeg',
		'images/12.jpeg',
		'images/13.jpeg',
		'images/14.jpeg',
		'images/15.jpeg',
	    'manifest.json'
		
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});