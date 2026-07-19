let shorbor=[];



async function loadAdminShorbor(){


const data =
await fetch(
"data/shorbor.json"
)

.then(r=>r.json());


shorbor=data.shorbor;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
shorbor.length;




document.getElementById(
"active"
)
.innerHTML =

shorbor.filter(

s=>s.status=="ปฏิบัติหน้าที่"

).length;




document.getElementById(
"area"
)
.innerHTML =

new Set(

shorbor.map(

s=>s.area

)

).size;



}







function showTable(){


let html="";



shorbor.forEach((s,i)=>{


html+=`

<tr>

<td>
${s.name}
</td>


<td>
${s.position}
</td>


<td>
${s.area}
</td>


<td>
${s.status}
</td>


<td>

<button onclick="deleteShorbor(${i})">

ลบ

</button>

</td>


</tr>


`;



});



document.getElementById(
"shorborTable"
)
.innerHTML=html;


}








function addShorbor(){


let data={


id:Date.now(),


name:
document.getElementById("name").value,


position:
document.getElementById("position").value,


area:
document.getElementById("areaName").value,


status:
document.getElementById("status").value


};



shorbor.push(data);



showSummary();

showTable();


alert(
"เพิ่มสมาชิก ชรบ. แล้ว"
);


}








function deleteShorbor(i){


if(confirm("ลบข้อมูล ชรบ. หรือไม่")){


shorbor.splice(i,1);


showSummary();

showTable();


}


}




loadAdminShorbor();
