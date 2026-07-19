/*
========================================
Rongkhem Smart Village Dashboard
Version 2.0
========================================
*/


// โหลด JSON

async function loadJSON(file){


try{


const response =
await fetch(file);



if(!response.ok){

throw new Error();

}


return await response.json();


}

catch(error){


console.log(
"ไม่พบข้อมูล : "+file
);


return [];


}


}







async function loadDashboard(){



// โหลดข้อมูล


const citizen =
await loadJSON(
"data/citizen.json"
);



const household =
await loadJSON(
"data/household.json"
);



const health =
await loadJSON(
"data/health.json"
);



const vulnerable =
await loadJSON(
"data/vulnerable.json"
);



const oporor =
await loadJSON(
"data/oporor.json"
);



const shorbor =
await loadJSON(
"data/shorbor.json"
);



const news =
await loadJSON(
"data/news.json"
);






// จำนวนข้อมูล


let population =
citizen.length || 202;


let households =
household.length || 0;


let elderly =
91;


let vulnerableCount =
vulnerable.length || 3;



let healthCount =
health.length || 0;



let opororCount =
oporor.length || 0;



let shorborCount =
shorbor.length || 15;



let newsCount =
news.length || 0;







// แสดงผล


setValue(
"population",
population
);


setValue(
"household",
households
);



setValue(
"elderly",
elderly
);



setValue(
"vulnerable",
vulnerableCount
);



setValue(
"health",
healthCount
);



setValue(
"shorbor",
shorborCount
);



setValue(
"oporor",
opororCount
);



setValue(
"news",
newsCount
);






// สรุป


document.getElementById(
"summary"
).innerHTML = `


<h3>
🏡 บ้านร่องเข็ม หมู่ที่ 6
</h3>



<p>
👥 ประชากรทั้งหมด 
<b>${population}</b>
คน
</p>



<p>
🏠 ครัวเรือน 
<b>${households}</b>
หลัง
</p>



<p>
👴 ผู้สูงอายุ 
<b>${elderly}</b>
คน
</p>



<p>
❤️ กลุ่มเปราะบาง 
<b>${vulnerableCount}</b>
คน
</p>



<p>
🩺 ระบบสุขภาพชุมชน 
<b>${healthCount}</b>
คน
</p>



<p>
ระบบ Dashboard เชื่อมต่อฐานข้อมูลหมู่บ้านอัจฉริยะ
</p>



`;






createCharts();



}









function setValue(id,value){


let element =
document.getElementById(id);



if(element){

element.innerHTML=value;

}


}









// สร้างกราฟ


function createCharts(){



let populationChart =
document.getElementById(
"populationChart"
);



let ageChart =
document.getElementById(
"ageChart"
);





if(populationChart){



new Chart(
populationChart,

{


type:"doughnut",


data:{


labels:[

"ประชาชน",

"ผู้สูงอายุ",

"กลุ่มเปราะบาง"

],



datasets:[{


data:[

202,

91,

3

]


}]


},


options:{

responsive:true

}


}


);



}









if(ageChart){



new Chart(

ageChart,

{


type:"bar",


data:{


labels:[


"ต่ำกว่า 40 ปี",

"40-59 ปี",

"60 ปีขึ้นไป"


],



datasets:[{


label:"จำนวนคน",


data:[

20,

86,

91

]


}]


},


options:{


responsive:true,


scales:{


y:{


beginAtZero:true


}


}


}


}


);



}




}








// พิมพ์รายงาน


function printReport(){


window.print();


}







// เริ่มระบบ


loadDashboard();
