let emergency=[];



async function loadEmergency(){


const data =
await fetch(
"data/emergency.json"
)

.then(r=>r.json());


emergency=data.emergency;


showEmergency();


}





function showEmergency(){


let html="";


emergency.forEach(e=>{


html+=`

<div class="emergency-card">


<h3>
🚨 ${e.type}
</h3>


<p>
ผู้แจ้ง :
${e.name}
</p>


<p>
📍 ${e.location}
</p>


<p>
ระดับ :
${e.level}
</p>


<p>
สถานะ :
${e.status}
</p>


<p>
เวลา :
${e.time}
</p>


</div>

`;



});



document.getElementById(
"emergencyList"
)
.innerHTML=html;


}







function sendEmergency(){


let now =
new Date();


let data={


id:Date.now(),


name:
document.getElementById("name").value,


type:
document.getElementById("type").value,


location:
document.getElementById("location").value,


level:
document.getElementById("level").value,


status:"รอดำเนินการ",


time:
now.toLocaleTimeString()

};



emergency.unshift(data);


showEmergency();


alert(
"ส่งแจ้งเหตุแล้ว"
);


}






loadEmergency();
