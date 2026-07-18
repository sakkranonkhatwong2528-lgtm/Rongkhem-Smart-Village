fetch("../data/wetland.json")

.then(res=>res.json())

.then(data=>{


showInfo(data);

showEco(data.ecosystem);

showProject(data.project);


});





function showInfo(w){


document.getElementById(
"wetland-info"
).innerHTML=

`

💧 ชื่อ:
${w.name}

<br>

📍 ที่ตั้ง:
${w.location}

<br>

🌱 ประเภท:
${w.area}

<br>

GPS:

${w.gps.lat},

${w.gps.lng}


`;



}






function showEco(data){


let html="";


data.forEach(e=>{


html+=`

<div>

🌿 ${e.type}

:

${e.name}

</div>

`;


});


document.getElementById(
"ecosystem-list"
).innerHTML=html;


}







function showProject(data){


let html="";


data.forEach(p=>{


html+=`

<div>

📌 ${p.name}

<br>

สถานะ:
${p.status}

</div>

<hr>

`;


});


document.getElementById(
"project-list"
).innerHTML=html;


}
