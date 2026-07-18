fetch("../data/report.json")

.then(res=>res.json())

.then(data=>{


showReport(data);


});





function showReport(r){


document.getElementById(
"report-summary"
).innerHTML=

`

🏡 หมู่บ้าน :

${r.village}


<br><br>


👥 ประชากร :

${r.population}

คน


<br>

🏠 ครัวเรือน :

${r.household}

หลัง


<br>

👴 ผู้สูงอายุ :

${r.elderly}

คน


<br>

♿ กลุ่มเปราะบาง :

${r.vulnerable}

รายการ


<br>

📌 โครงการ :

${r.project}

โครงการ


<br>

📋 ร้องเรียน :

${r.complaint}

เรื่อง


<br>

📅 กิจกรรม :

${r.activity}

ครั้ง


<br>

🛡 อปพร./ชรบ. :

${r.oporor}

คน


`;



}





function printReport(){


window.print();


}
