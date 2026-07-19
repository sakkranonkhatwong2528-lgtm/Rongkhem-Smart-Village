let map;



function initMap(){



map =
L.map('map')
.setView(

[
19.166,
99.900
],

15

);





L.tileLayer(

'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

{

maxZoom:19,

}

)

.addTo(map);






// หมู่บ้านร่องเข็ม

L.marker(

[
19.166,
99.900
]

)

.addTo(map)

.bindPopup(

`

<h3>
🏡 บ้านร่องเข็ม หมู่ที่ 6
</h3>

<p>
ตำบลจำป่าหวาย
จังหวัดพะเยา
</p>

`

);







// วัดร่องเข็ม

L.marker(

[
19.165,
99.905
]

)

.addTo(map)

.bindPopup(

`

<h3>
🛕 วัดร่องเข็ม
</h3>

`

);







// แหล่งซับน้ำจำ

L.marker(

[
19.170,
99.910
]

)

.addTo(map)

.bindPopup(

`

<h3>
🏞️ แหล่งซับน้ำจำ
</h3>

<p>
พื้นที่อนุรักษ์ธรรมชาติ
</p>

`

);






// จุดเสี่ยง

L.circle(

[
19.168,
99.902
],

{

radius:300,

color:'red'

}

)

.addTo(map)

.bindPopup(

`

🚨 จุดเฝ้าระวัง

`

);



}



initMap();
