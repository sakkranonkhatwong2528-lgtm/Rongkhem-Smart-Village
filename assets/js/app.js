// Rongkhem Smart Village v2.0
// Main Application


// โหลดข้อมูลหมู่บ้าน

function loadVillageData(){

fetch("data/village.json")

.then(response => response.json())

.then(data=>{

console.log("Village Data:",data);


// แสดงข้อมูลถ้ามี element

if(document.getElementById("villageName")){

document.getElementById("villageName").innerHTML =
data.village;

}


if(document.getElementById("population")){

document.getElementById("population").innerHTML =
data.population;

}


if(document.getElementById("households")){

document.getElementById("households").innerHTML =
data.households;

}


})

.catch(error=>{

console.log(
"ไม่พบข้อมูล village.json",
error
);

});

}

fetch("data/news.json")

.then(res=>res.json())

.then(data=>{


let html="";


data
.filter(x=>x.status=="เผยแพร่")
.slice(0,5)
.forEach(n=>{


html+=`

<div>

📌 ${n.title}

<br>

<small>
${n.date}
</small>

</div>

<hr>

`;

});


document.getElementById(
"home-news"
).innerHTML=html;


});

// ระบบเมนูมือถือ

function toggleMenu(){

let menu =
document.getElementById("mainMenu");


if(menu.style.display==="block"){

menu.style.display="none";

}

else{

menu.style.display="block";

}

}



// เวลา

function showDate(){

let date =
new Date();


let text =
date.toLocaleDateString(
"th-TH",
{
year:"numeric",
month:"long",
day:"numeric"
}
);


let box =
document.getElementById("today");


if(box){

box.innerHTML=text;

}

}



// เริ่มระบบ

document.addEventListener(
"DOMContentLoaded",
function(){

loadVillageData();

showDate();

}
);
