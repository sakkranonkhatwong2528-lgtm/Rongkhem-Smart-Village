/*
====================================
Smart Report Generator
Rongkhem Smart Village
====================================
*/


function loadReport(){



document.getElementById(
"villageReport"
)
.innerHTML = `


<p>
🏡 บ้านร่องเข็ม หมู่ที่ 6
</p>


<p>
ตำบลจำป่าหวาย อำเภอเมือง จังหวัดพะเยา
</p>


<p>
ระบบบริหารจัดการหมู่บ้านอัจฉริยะ
Rongkhem Smart Village
</p>


`;





document.getElementById(
"peopleReport"
)
.innerHTML = `


<p>
👥 ประชากรทั้งหมด : 202 คน
</p>


<p>
🏠 ครัวเรือน : ข้อมูลจากระบบทะเบียนบ้าน
</p>


<p>
👴 ผู้สูงอายุ : 91 คน
</p>


<p>
❤️ กลุ่มเปราะบาง : 3 คน
</p>


<p>
🩺 ระบบสุขภาพเชื่อมโยง อสม.
</p>


`;






document.getElementById(
"environmentReport"
)
.innerHTML = `


<p>
🌫️ ติดตาม PM2.5 และการเผาในพื้นที่
</p>


<p>
🔥 ส่งเสริมลดการเผาในชุมชน
</p>


<p>
🏞️ แหล่งซับน้ำจำ ระบบนิเวศชุมชน
</p>


`;






document.getElementById(
"projectReport"
)
.innerHTML = `


<ul>

<li>
🏡 Rongkhem Smart Village
</li>

<li>
💧 น้ำดื่มชุมชน ตราน้ำจำ
</li>

<li>
🏞️ พัฒนาแหล่งซับน้ำจำ
</li>

<li>
♻️ ลดการเผา ลด PM2.5
</li>

</ul>


`;



}






function printReport(){


window.print();


}




loadReport();
