/*
Rongkhem Smart Village
Service Worker
Version 1.0
*/


const CACHE_NAME =

"rongkhem-smart-village-v1";




const FILES = [


"/",

"/index.html",

"/dashboard.html",


"/assets/css/dashboard.css",


"/assets/js/dashboard.js",


"/data/village.json",

"/data/citizen.json",

"/data/health.json",

"/data/leader.json",

"/data/activity.json",

"/data/news.json"


];






self.addEventListener(

"install",

event=>{


event.waitUntil(


caches.open(CACHE_NAME)

.then(cache=>{


return cache.addAll(FILES);


})


);


}

);








self.addEventListener(

"fetch",

event=>{


event.respondWith(


caches.match(event.request)

.then(response=>{


return response ||

fetch(event.request);


})


);


}

);






self.addEventListener(

"activate",

event=>{


event.waitUntil(

caches.keys()

.then(keys=>{


return Promise.all(

keys.map(key=>{


if(key!==CACHE_NAME){


return caches.delete(key);


}


})


);


})


);


});
