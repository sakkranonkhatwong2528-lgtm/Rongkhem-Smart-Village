let emergency=[];



async function loadAdminEmergency(){


const data =
await fetch(
"data/emergency.json"
)

.then(r=>r.json());


emergency=data.emergency;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
emergency.length;



document.getElementById(
"pending"
)
.innerHTML =

emergency.filter(

e=>e.status=="รอดำเนินการ"

).length;




document.getElementById(
"done"
)
.innerHTML =

emergency.filter(

e=>e.status=="ดำเนินการแล้ว"

).length;


}







function showTable(){


let html="";



emergency.forEach((e,i)=>{


html+=`

<tr>


<td>
${e.type}
</td>


<td>
${e.name}
</td>


<td>
${e.location}
</td>


<td>
${e.level}
</td>


<td>

<select onchange="assign(${i},this.value)">

<option>
ยังไม่มอบหมาย
</option>

<option>
ชรบ.
</option>

<option>
อปพร.
</option>

</select>

</td>



<td>

<select onchange="changeStatus(${i},this.value)">


<option>
${e.status}
</option>

<option>
รอดำเนินการ
</option>

<option>
กำลังดำเนินการ
</option>

<option>
ดำเนินการแล้ว
</option>


</select>


</td>



<td>


<button onclick="deleteEmergency(${i})">

ลบ

</button>


</td>



</tr>

`;



});



document.getElementById(
"emergencyTable"
)
.innerHTML=html;


}







function changeStatus(i,status){


emergency[i].status=status;


showSummary();

showTable();


}







function assign(i,name){


emergency[i].team=name;


}




function deleteEmergency(i){


if(confirm("ลบรายการแจ้งเหตุหรือไม่")){


emergency.splice(i,1);


showSummary();

showTable();


}


}




loadAdminEmergency();
