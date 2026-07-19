let elderly=[];



async function loadAdminElderly(){


const data =
await fetch(
"data/elderly.json"
)

.then(r=>r.json());


elderly=data.elderly;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
elderly.length;




document.getElementById(
"health"
)
.innerHTML =

elderly.filter(

e=>e.health=="ติดตามสุขภาพ"

).length;




document.getElementById(
"care"
)
.innerHTML =

elderly.filter(

e=>e.care.includes("อสม.")

).length;



}








function showTable(){


let html="";


elderly.forEach((e,i)=>{


html+=`

<tr>


<td>
${e.name}
</td>


<td>
${e.age}
</td>


<td>
${e.house}
</td>


<td>
${e.health}
</td>


<td>


<button onclick="deleteElderly(${i})">

ลบ

</button>


</td>


</tr>


`;



});



document.getElementById(
"elderlyTable"
)
.innerHTML=html;


}







function addElderly(){



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


health:
document.getElementById("healthStatus").value,


care:"อสม. ดูแล"


};



elderly.push(data);



showSummary();

showTable();


alert(
"เพิ่มข้อมูลผู้สูงอายุแล้ว"
);


}







function deleteElderly(i){


if(confirm("ลบข้อมูลนี้หรือไม่")){


elderly.splice(i,1);


showSummary();

showTable();


}


}






loadAdminElderly();
