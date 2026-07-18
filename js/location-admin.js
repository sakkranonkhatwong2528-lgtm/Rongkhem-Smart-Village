fetch("../data/location.json")

.then(res=>res.json())

.then(data=>{


showLocation(data);


});





function showLocation(data){


let html="";


data.forEach(l=>{


html+=`

<div class="card">


<h3>
📍 ${l.name}
</h3>


<p>

ประเภท:
${l.type}

</p>


<p>

พิกัด:

${l.lat},

${l.lng}

</p>


<p>

${l.detail}

</p>


<a target="_blank"

href="https://maps.google.com/?q=${l.lat},${l.lng}">

เปิด Google Map

</a>


</div>


`;



});


document.getElementById(
"location-list"
).innerHTML=html;


}
