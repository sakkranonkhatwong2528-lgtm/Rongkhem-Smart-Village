let oporor=[];



async function loadAdminOporor(){


const data =
await fetch(
"data/oporor.json"
)

.then(r=>r.json());


oporor=data.oporor;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
oporor.length;



document.getElementById(
"ready"
)
.innerHTML =

oporor.filter(

o=>o.status=="พร้อมปฏิบัติ"

).length;



document.getElementById(
"skill"
)
.innerHTML =

new Set(

oporor.map(

o=>o.skill

)

).size;



}







function showTable(){


let html="";



oporor.forEach((o,i)=>{


html+=`

<tr>


<td>
${o.name}
</td>


<td>
${o.position}
</td>


<td>
${o.skill}
</td>


<td>
${o.status}
</td>


<td>


<button onclick="deleteOporor(${i})">

ลบ

</button>


</td>


</tr>


`;



});



document.getElementById(
"opororTable"
)
.innerHTML=html;


}







function addOporor(){


let data={


id:Date.now(),


name:
document.getElementById("name").value,


position:
document.getElementById("position").value,


skill:
document.getElementById("skillName").value,


area:
document.getElementById("area").value,


status:
document.getElementById("status").value


};



oporor.push(data);



showSummary();

showTable();


alert(
"เพิ่มข้อมูล อปพร. แล้ว"
);


}







function deleteOporor(i){


if(confirm("ลบข้อมูล อปพร. หรือไม่")){


oporor.splice(i,1);


showSummary();

showTable();


}


}



loadAdminOporor();
