/*
====================================
Survey Connect Dashboard
Rongkhem Smart Village
====================================
*/


async function loadSurveyDashboard(){


try{


const data =
await fetch(
"data/survey.json"
)
.then(r=>r.json());



let elderlyPercent =
((data.vulnerable.elderly / data.total)*100)
.toFixed(1);



let burningPercent =
((data.environment.burning / data.total)*100)
.toFixed(1);



let alternativePercent =
((data.environment.wantAlternative / data.total)*100)
.toFixed(1);





let box =
document.getElementById(
"surveySummary"
);



if(box){


box.innerHTML = `


<div class="survey-report">


<h2>
📊 ข้อมูลแบบสำรวจชุมชน
</h2>


<p>
👥 ผู้ตอบแบบสำรวจ
<b>
${data.total}
</b>
คน
</p>


<p>
👴 ผู้สูงอายุ
<b>
${elderlyPercent}%
</b>
</p>



<p>
🔥 พบการเผาในพื้นที่
<b>
${burningPercent}%
</b>
</p>



<p>
🌱 พร้อมเปลี่ยนหากมีทางเลือก
<b>
${alternativePercent}%
</b>
</p>



<p>
🌫️ ระบบติดตาม PM2.5
<b>
Smart Environment
</b>
</p>



</div>


`;

}



}

catch(error){

console.log(error);

}


}



loadSurveyDashboard();
