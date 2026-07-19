let complaints=[];



async function loadComplaint(){


const data =
await fetch(
"data/complaint.json"
)

.then(r=>r.json());


complaints =
data.complaints;


showComplaint();


}




function showComplaint(){


let html="";



complaints.forEach(c=>{


html += `


<div class="complaint-card">


<h3>
📌 ${c.title}
</h3>


<p>
ประเภท :
${c.type}
</p>


<p>
${c.detail}
</p>


<p>
สถานะ :
<b>${c.status}</b>
</p>


<p>
วันที่ :
${c.date}
</p>


</div>


`;



});


document.getElementById(
"complaintList"
)
.innerHTML=html;


}







function sendComplaint(){


alert(
"ส่งเรื่องร้องเรียนเรียบร้อยแล้ว"
);


}






loadComplaint();
