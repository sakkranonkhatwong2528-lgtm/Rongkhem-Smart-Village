// ===============================
// Rongkhem Smart Village
// ระบบหน้าแรก
// ===============================


// โหลดข้อมูลหมู่บ้าน

async function loadVillage(){

try{

const response = await fetch("data/village.json");

const data = await response.json();


console.log("ข้อมูลหมู่บ้าน",data);


}

catch(error){

console.log("ไม่สามารถโหลดข้อมูลหมู่บ้าน",error);

}

}



// โหลดข่าวล่าสุด

async function loadNews(){

try{

const response = await fetch("data/news.json");

const data = await response.json();


console.log("ข่าวล่าสุด",data);


}

catch(error){

console.log("ไม่สามารถโหลดข่าว",error);

}

}



// โหลดกิจกรรม

async function loadActivity(){

try{

const response = await fetch("data/activity.json");

const data = await response.json();


console.log("กิจกรรม",data);


}

catch(error){

console.log("ไม่สามารถโหลดกิจกรรม",error);

}

}



// โหลด Dashboard

async function loadDashboard(){

try{

const citizen =
await fetch("data/citizen.json")
.then(r=>r.json());


const household =
await fetch("data/household.json")
.then(r=>r.json());


console.log(
"ประชาชน",
citizen
);


console.log(
"ครัวเรือน",
household
);


}

catch(error){

console.log("ไม่สามารถโหลด Dashboard",error);

}

}



// เริ่มระบบ

loadVillage();

loadNews();

loadActivity();

loadDashboard();
