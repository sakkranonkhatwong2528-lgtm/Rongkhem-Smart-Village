let health=[];



async function loadHealthAdmin(){


const data =
await fetch(
"data/health.json"
)

.then(r=>r.json());


health=data.health;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
).innerHTML =
health.length;




document.getElementById(
"normal"
).innerHTML =

health.filter(

h=>h.status=="ปกติ"

).length;




document.getElementById(
"follow"
).innerHTML =

health.filter(

h=>h.status=="ติดตาม"

).length;




document.getElementById(
"special"
).innerHTML =

health.filter(

h=>h.status=="ดูแลพิเศษ"

).length;



}








function showTable(){


let html="";



health.forEach((h,i)=>{


html+=`

<tr>

<td>
${h.name}
</td>


<td>
${h.disease}
</td>


<td>
${h.status}
</td>


<td>

<button onclick="deleteHealth(${i})">

ลบ

</button>

</td>


</tr>

`;



});



document.getElementById(
"healthTable"
)
.innerHTML=html;


}








function addHealth(){


let data={


id:Date.now(),


name:
document.getElementById("name").value,


age:
Number(
document.getElementById("age").value
),


house:
document.getElementById("house").value,


disease:
document.getElementById("disease").value,


status:
document.getElementById("status").value,


volunteer:
"อสม. บ้านร่องเข็ม"


};



health.push(data);



showSummary();

showTable();


alert(
"เพิ่มข้อมูลสุขภาพแล้ว"
);


}







function deleteHealth(i){


if(confirm("ลบข้อมูลสุขภาพนี้หรือไม่")){


health.splice(i,1);


showSummary();

showTable();


}


}




loadHealthAdmin();
