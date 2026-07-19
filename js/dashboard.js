/*
=====================================
Rongkhem Smart Village Dashboard JS
=====================================
*/


// โหลดข้อมูล JSON

async function loadData(file){

try{

const response = await fetch(file);

const data = await response.json();

return data;


}

catch(error){

console.log(
"ไม่พบไฟล์ : "+file
);

return [];

}


}





async function loadDashboard(){



// เรียกข้อมูลจากระบบ


const citizen =
await loadData(
"data/citizen.json"
);



const household =
await loadData(
"data/household.json"
);



const elderly =
await loadData(
"data/elderly.json"
);



const vulnerable =
await loadData(
"data/vulnerable.json"
);



const health =
await loadData(
"data/health.json"
);



const shorbor =
await loadData(
"data/shorbor.json"
);



const oporor =
await loadData(
"data/oporor.json"
);



const news =
await loadData(
"data/news.json"
);





// แสดงตัวเลข


document.getElementById(
"population"
).innerHTML =
citizen.length || 202;




document.getElementById(
"household"
).innerHTML =
household.length;




document.getElementById(
"elderly"
).innerHTML =
elderly.length || 91;




document.getElementById(
"vulnerable"
).innerHTML =
vulnerable.length || 3;




document.getElementById(
"health"
).innerHTML =
health.length;




document.getElementById(
"shorbor"
).innerHTML =
shorbor.length;




document.getElementById(
"oporor"
).innerHTML =
oporor.length;




document.getElementById(
"news"
).innerHTML =
news.length;







// สรุปสถานการณ์


document.getElementById(
"summary"
).innerHTML =

`

<h3>
🏡 บ้านร่องเข็ม หมู่ที่ 6
</h3>


<p>

👥 ประชากรทั้งหมด 
<b>${citizen.length || 202}</b>
คน

</p>


<p>

🏠 จำนวนครัวเรือน 
<b>${household.length}</b>
หลัง

</p>


<p>

👴 ผู้สูงอายุ 
<b>${elderly.length || 91}</b>
คน

</p>


<p>

❤️ กลุ่มเปราะบาง 
<b>${vulnerable.length || 3}</b>
คน

</p>


<p>

ระบบบริหารจัดการหมู่บ้านอัจฉริยะ
เชื่อมโยงข้อมูลเพื่อการพัฒนาชุมชน

</p>

`;





// สร้างกราฟ


createCharts();



}





// =============================
// CHART
// =============================


function createCharts(){



const populationChart =
document.getElementById(
"populationChart"
);



const ageChart =
document.getElementById(
"ageChart"
);




// กราฟประชากร


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







// กราฟอายุ


new Chart(

ageChart,

{


type:"bar",


data:{


labels:[


"ต่ำกว่า 40 ปี",

"40 - 59 ปี",

"60 ปีขึ้นไป"


],



datasets:[{


label:"จำนวนประชาชน",


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





// พิมพ์รายงาน


function printReport(){


window.print();


}





// เริ่มทำงาน


loadDashboard();
