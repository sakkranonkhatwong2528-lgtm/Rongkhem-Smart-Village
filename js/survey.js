/*
====================================
Rongkhem Smart Village Survey JS
====================================
*/



async function loadSurvey(){


try{


const response =
await fetch(
"data/survey.json"
);



const data =
await response.json();





// ตัวเลขสรุป


document.getElementById(
"total"
).innerHTML =
data.total;




document.getElementById(
"elderly"
).innerHTML =
data.vulnerable.elderly;




document.getElementById(
"disabled"
).innerHTML =
data.vulnerable.disabled;





// กราฟเพศ


new Chart(

document.getElementById(
"genderChart"
),

{


type:"pie",


data:{


labels:[

"ชาย",

"หญิง"

],



datasets:[{


data:[

data.gender.male,

data.gender.female

]


}]


}



}

);








// กราฟอายุ


new Chart(

document.getElementById(
"ageChart"
),

{


type:"bar",


data:{


labels:[


"ต่ำกว่า 40",

"40-59",

"60 ปีขึ้นไป"


],



datasets:[{


label:"จำนวนคน",


data:[


data.age.under40,

data.age["40_59"],

data.age.over60


]


}]



}


}

);








// กราฟสิ่งแวดล้อม


new Chart(

document.getElementById(
"environmentChart"
),

{


type:"doughnut",


data:{


labels:[


"มีการเผา",

"กังวล PM2.5",

"ต้องการทางเลือก"


],



datasets:[{


data:[


data.environment.burning,

data.environment.pm25Concern,

data.environment.wantAlternative


]


}]


}


}

);








// รายงาน


document.getElementById(
"report"
).innerHTML =

`

<p>
📊 จากการสำรวจประชาชนทั้งหมด 
<b>${data.total}</b> คน
</p>


<p>
👴 ผู้สูงอายุ 
<b>${data.vulnerable.elderly}</b> คน
</p>


<p>
♿ ผู้พิการ 
<b>${data.vulnerable.disabled}</b> คน
</p>


<p>
🔥 พบข้อมูลการเผาในพื้นที่ 
<b>${data.environment.burning}</b> ราย
</p>


<p>
🌫️ ประชาชนให้ความสำคัญกับ PM2.5 
<b>${data.environment.pm25Concern}</b> ราย
</p>


<p>
🌱 พร้อมเปลี่ยนหากมีทางเลือก 
<b>${data.environment.wantAlternative}</b> ราย
</p>


`;



}

catch(error){


console.log(error);


document.getElementById(
"report"
).innerHTML =
"ไม่สามารถโหลดข้อมูลแบบสำรวจได้";


}



}




loadSurvey();
