/*
==================================
Admin Complaint Dashboard
Rongkhem Smart Village
==================================
*/


let complaints=[];




async function loadAdminComplaint(){



const data =
await fetch(
"data/complaint.json"
)

.then(r=>r.json());



complaints =
data.complaints;



updateSummary();


showTable();


}







function updateSummary(){


document.getElementById(
"total"
)
.innerHTML =
complaints.length;




document.getElementById(
"pending"
)
.innerHTML =

complaints.filter(

c=>c.status=="รอดำเนินการ"

).length;





document.getElementById(
"process"
)
.innerHTML =

complaints.filter(

c=>c.status=="กำลังแก้ไข"

).length;





document.getElementById(
"done"
)
.innerHTML =

complaints.filter(

c=>c.status=="เสร็จแล้ว"

).length;


}







function showTable(){


let html="";



complaints.forEach((c,index)=>{


html+=`


<tr>


<td>

${c.title}

</td>



<td>

${c.type}

</td>




<td>

${c.status}

</td>



<td>


<button onclick="changeStatus(${index})">

เปลี่ยนสถานะ

</button>


</td>



</tr>


`;



});




document.getElementById(
"complaintData"
)
.innerHTML=html;


}








function changeStatus(index){



let status =

prompt(

"ใส่สถานะใหม่\nรอดำเนินการ / กำลังแก้ไข / เสร็จแล้ว",

complaints[index].status

);




if(status){


complaints[index].status=status;



updateSummary();


showTable();


}



}







loadAdminComplaint();
