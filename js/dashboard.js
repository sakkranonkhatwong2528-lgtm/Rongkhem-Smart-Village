async function loadDashboard(){

try{


let citizen =
await fetch("data/citizen.json")
.then(r=>r.json());


let household =
await fetch("data/household.json")
.then(r=>r.json());


let elderly =
await fetch("data/elderly.json")
.then(r=>r.json());


let vulnerable =
await fetch("data/vulnerable.json")
.then(r=>r.json());


let health =
await fetch("data/health.json")
.then(r=>r.json());


let shorbor =
await fetch("data/shorbor.json")
.then(r=>r.json());


let oporor =
await fetch("data/oporor.json")
.then(r=>r.json());


let news =
await fetch("data/news.json")
.then(r=>r.json());



document.getElementById("population")
.innerHTML = citizen.length;


document.getElementById("household")
.innerHTML = household.length;


document.getElementById("elderly")
.innerHTML = elderly.length;


document.getElementById("vulnerable")
.innerHTML = vulnerable.length;


document.getElementById("health")
.innerHTML = health.length;


document.getElementById("shorbor")
.innerHTML = shorbor.length;


document.getElementById("oporor")
.innerHTML = oporor.length;


document.getElementById("news")
.innerHTML = news.length;



document.getElementById("summaryText")
.innerHTML = `

🏡 บ้านร่องเข็ม หมู่ที่ 6

<br><br>

มีประชากรทั้งหมด 
<b>${citizen.length}</b> คน

<br>

มีผู้สูงอายุ 
<b>${elderly.length}</b> คน

<br>

มีกลุ่มเปราะบาง 
<b>${vulnerable.length}</b> คน

<br><br>

ระบบ Dashboard เชื่อมต่อฐานข้อมูลหมู่บ้านอัจฉริยะ

`;



}

catch(error){

console.log(error);

document.getElementById("summaryText")
.innerHTML =
"ไม่สามารถโหลดข้อมูลได้";

}


}


loadDashboard();
