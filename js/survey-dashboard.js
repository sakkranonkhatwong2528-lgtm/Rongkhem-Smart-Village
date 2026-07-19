/*
=========================================
Rongkhem Smart Village
Survey Dashboard Connector
=========================================
*/


async function loadSurveyDashboard(){



try{



const response = await fetch(
"data/survey.json"
);



const data =
await response.json();





// คำนวณเปอร์เซ็นต์


let elderlyPercent =
(
data.vulnerable.elderly /
data.total *
100
).toFixed(1);




let burningPercent =
(
data.environment.burning /
data.total *
100
).toFixed(1);




let alternativePercent =
(
data.environment.wantAlternative /
data.total *
100
).toFixed(1);







let target =
document.getElementById(
"surveySummary"
);






if(target){



target.innerHTML = `



<div class="survey-report">



<p>
👥 จำนวนผู้ตอบแบบสำรวจ

<br>

<strong>
${data.total}
</strong>
คน

</p>




<p>
⚥ เพศ

<br>

ชาย 
<strong>
${data.gender.male}
</strong>

คน

<br>

หญิง
<strong>
${data.gender.female}
</strong>

คน

</p>





<p>
👴 ผู้สูงอายุ

<br>

<strong>
${data.vulnerable.elderly}
</strong>

คน

(${elderlyPercent}%)

</p>





<p>
♿ ผู้พิการ

<br>

<strong>
${data.vulnerable.disabled}
</strong>

คน

</p>






<p>
🔥 การเผาช่วงห้ามเผา

<br>

<strong>
${data.environment.burning}
</strong>

ราย

(${burningPercent}%)

</p>






<p>
🌱 ยินดีเปลี่ยนหากมีทางเลือก

<br>

<strong>
${data.environment.wantAlternative}
</strong>

ราย

(${alternativePercent}%)

</p>






<p>
🌫️ ระบบติดตามคุณภาพอากาศ

<br>

<strong>
Smart Environment
</strong>

</p>




</div>



`;



}





}

catch(error){


console.log(
"Survey Error",
error
);



let target =
document.getElementById(
"surveySummary"
);



if(target){

target.innerHTML =

"ไม่พบข้อมูลแบบสำรวจ";


}



}



}







loadSurveyDashboard();
