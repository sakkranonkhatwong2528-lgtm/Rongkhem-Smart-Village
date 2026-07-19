/*
=================================
Admin Center Controller
Rongkhem Smart Village
=================================
*/


function loadSystemStatus(){



let status = `


<p>
✅ Dashboard : พร้อมใช้งาน
</p>


<p>
✅ ระบบประชาชน : พร้อมใช้งาน
</p>


<p>
✅ ระบบสุขภาพ : พร้อมใช้งาน
</p>


<p>
✅ ระบบแผนที่ : พร้อมใช้งาน
</p>


<p>
✅ ระบบเอกสาร : พร้อมใช้งาน
</p>


<p>
✅ AI ผู้ช่วยหมู่บ้าน : พร้อมใช้งาน
</p>



`;




document.getElementById(
"status"
)
.innerHTML=status;



}




loadSystemStatus();
