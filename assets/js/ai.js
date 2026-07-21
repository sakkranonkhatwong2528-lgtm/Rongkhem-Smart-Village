/* =================================
 Rongkhem AI Assistant
 Version 1.0
================================= */


function askAI(){


let input =

document.getElementById("question");



let question =

input.value.trim();



if(question==="")return;



addMessage(

question,

"user"

);



let answer = getAnswer(question);



setTimeout(()=>{


addMessage(

answer,

"bot"

);


},500);



input.value="";


}





function addMessage(text,type){



let box=

document.getElementById("chat");



let div=

document.createElement("div");



div.className=

"message "+type;



div.innerHTML=text;



box.appendChild(div);



box.scrollTop=

box.scrollHeight;


}







function getAnswer(q){



q=q.toLowerCase();



if(q.includes("ผู้ใหญ่บ้าน")){


return "ผู้ใหญ่บ้านบ้านร่องเข็ม คือ นายศักรนนท์ ขัติย์วงศ์";


}



if(q.includes("หมู่")){


return "บ้านร่องเข็ม อยู่หมู่ที่ 6 ตำบลจำป่าหวาย อำเภอเมือง จังหวัดพะเยา";


}



if(q.includes("แหล่งซับน้ำจำ")){


return "แหล่งซับน้ำจำ เป็นพื้นที่ธรรมชาติสำคัญของชุมชน ใช้ในการอนุรักษ์ทรัพยากรและสิ่งแวดล้อม";


}



if(q.includes("ร้องเรียน")){


return "สามารถแจ้งปัญหาชุมชนผ่านระบบ Smart Complaint ของหมู่บ้าน";


}



if(q.includes("ติดต่อ")){


return "ติดต่อศูนย์บริหารหมู่บ้านร่องเข็ม Smart Village";


}



return "ขออภัยครับ ยังไม่มีข้อมูลนี้ในระบบ กรุณาติดต่อผู้ดูแลระบบเพื่อเพิ่มข้อมูล";



}
