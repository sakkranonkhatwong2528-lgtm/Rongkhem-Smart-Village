
let projects=[];



fetch("../data/project.json")

.then(res=>res.json())

.then(data=>{

projects=data;

showProjects();

summary();

});





function showProjects(){


let html="";


projects.forEach(p=>{


html+=`

<tr>


<td>
${p.name}
</td>


<td>
${p.type}
</td>


<td>
${p.budget.toLocaleString()}
บาท
</td>


<td>
${p.owner}
</td>


<td>

<div>

${p.progress} %

</div>


</td>



<td>


<select onchange="changeStatus(${p.id},this.value)">


<option ${p.status=="อยู่ระหว่างเสนอ"?"selected":""}>
อยู่ระหว่างเสนอ
</option>


<option ${p.status=="กำลังดำเนินการ"?"selected":""}>
กำลังดำเนินการ
</option>


<option ${p.status=="เสร็จแล้ว"?"selected":""}>
เสร็จแล้ว
</option>


<option ${p.status=="ยกเลิก"?"selected":""}>
ยกเลิก
</option>


</select>


</td>


</tr>

`;


});



document.getElementById(
"project-table"
).innerHTML=html;


}





function changeStatus(id,status){


let p =
projects.find(
x=>x.id==id
);


p.status=status;


summary();


}





function summary(){


let total=
projects.length;


let finish=
projects.filter(
x=>x.status=="เสร็จแล้ว"
).length;


let budget=
projects.reduce(
(a,b)=>a+b.budget,0
);



document.getElementById(
"project-summary"
).innerHTML=

`

📌 จำนวนโครงการ :
${total}

<br>

🟢 เสร็จแล้ว :
${finish}

<br>

💰 งบประมาณรวม :
${budget.toLocaleString()}
บาท


`;

}
