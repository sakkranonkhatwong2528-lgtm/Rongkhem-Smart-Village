/*
=================================
AI Village Assistant
Rongkhem Smart Village
=================================
*/


function askAI(){


let question =
document.getElementById(
"question"
).value;



let answer =
generateAnswer(question);



document.getElementById(
"answer"
)
.innerHTML =
answer;


}





function quick(text){


document.getElementById(
"question"
)
.value=text;


askAI();


}







function generateAnswer(q){



q=q.toLowerCase();




if(
q.includes("ประชากร")
||
q.includes("คน")
){

return `

👥 บ้านร่องเข็ม หมู่ที่ 6

มีประชากรในระบบ
ประมาณ 202 คน

ข้อมูลจากระบบ Smart Village

`;

}





if(
q.includes("ผู้สูงอายุ")
){

return `

👴 ระบบข้อมูลผู้สูงอายุ

จำนวนประมาณ 91 คน

ใช้สำหรับวางแผนสุขภาพชุมชน

`;

}





if(
q.includes("โครงการ")
){

return `

📌 โครงการสำคัญ

- ร่องเข็ม Smart Village

- พัฒนาแหล่งซับน้ำจำ

- ลดการเผา ลด PM2.5

- ส่งเสริมเศรษฐกิจชุมชน

`;

}





if(
q.includes("รายงาน")
){

return `

📄 รายงานสถานการณ์หมู่บ้าน

บ้านร่องเข็ม หมู่ที่ 6

มีระบบข้อมูลประชาชน
สิ่งแวดล้อม
สุขภาพ
และการพัฒนาชุมชน

`;

}





return `

🤖 AI หมู่บ้าน

ยังไม่พบข้อมูลคำถามนี้

ลองถามเกี่ยวกับ

- ประชากร

- ผู้สูงอายุ

- โครงการ

- รายงาน

`;



}
