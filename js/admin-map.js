/*
====================================
Admin Smart Map Center
Rongkhem Smart Village
====================================
*/


async function loadAdminMap(){



const data =
await fetch(
"data/location.json"
)
.then(r=>r.json());





// ตัวเลข


document.getElementById(
"placeCount"
)
.innerHTML =
data.places.length;




document.getElementById(
"wetlandCount"
)
.innerHTML =

data.places.filter(

x=>x.type=="wetland"

).length;





document.getElementById(
"elderlyCount"
)
.innerHTML =

data.places.filter(

x=>x.type=="elderly"

).length;







// สร้างแผนที่


let map =

L.map('adminMap')

.setView(

[
data.center.lat,
data.center.lng
],

16

);





L.tileLayer(

'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

).addTo(map);








let table="";





data.places.forEach(place=>{


L.marker(

[
place.lat,
place.lng
]

)

.addTo(map)

.bindPopup(
place.name
);




table += `

<tr>

<td>
${place.name}
</td>


<td>
${place.type}
</td>


</tr>

`;



});





document.getElementById(
"locationTable"
)
.innerHTML =
table;



}





loadAdminMap();
