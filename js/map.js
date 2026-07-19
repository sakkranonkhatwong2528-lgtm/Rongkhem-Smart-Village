/*
=================================
Rongkhem Smart Village Map
=================================
*/


async function loadMap(){


const data =
await fetch(
"data/location.json"
)
.then(r=>r.json());





let map =
L.map('map')
.setView(

[
data.center.lat,
data.center.lng
],

16

);






L.tileLayer(

'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

{

maxZoom:19

}

).addTo(map);







data.places.forEach(place=>{


let marker =
L.marker(

[
place.lat,
place.lng
]

)

.addTo(map);




marker.bindPopup(

`

<h3>
${place.name}
</h3>


<p>
ระบบ Smart Village
</p>


`

);



});




}



loadMap();
