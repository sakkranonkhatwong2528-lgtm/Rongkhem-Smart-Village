const CACHE_NAME =
"rongkhem-smart-village-v1";


const FILES = [


"index.html",

"dashboard.html",

"css/style.css",

"css/dashboard.css",

"js/dashboard.js",

"data/citizen.json",

"data/household.json",

"data/vulnerable.json"

];





self.addEventListener(
"install",

event=>{


event.waitUntil(

caches.open(
CACHE_NAME
)

.then(cache=>{

return cache.addAll(
FILES
);

})

);


}

);







self.addEventListener(
"fetch",

event=>{


event.respondWith(

caches.match(
event.request
)

.then(response=>{


return response ||

fetch(
event.request
);


})


);


}

);
