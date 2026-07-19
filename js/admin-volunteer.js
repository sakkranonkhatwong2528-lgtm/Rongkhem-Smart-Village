let volunteers=[];



async function loadVolunteerAdmin(){


const data =
await fetch(
"data/volunteer.json"
)

.then(r=>r.json());


volunteers=data.volunteers;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
volunteers.length;



document.getElementById(
"people"
)
.innerHTML =

volunteers.reduce(

(sum,v)=>

sum+Number(v.care),

0

);



}







function showTable(){


let html="";



volunteers.forEach((v,i)=>{


html+=`

<tr>

<td>
${v.name}
</td>


<td>
${v.position}
</td>


<td>
${v.area}
</td>


<td>
${v.care}
</td>


<td>


<button onclick="deleteVolunteer(${i})">

ลบ

</button>


</td>


</tr>

`;



});



document.getElementById(
"volTable"
)
.innerHTML=html;


}








function addVolunteer(){


let data={


id:Date.now(),


name:
document.getElementById("name").value,


position:
document.getElementById("position").value,


area:
document.getElementById("area").value,


care:
Number(
document.getElementById("care").value
)


};



volunteers.push(data);



showSummary();

showTable();


alert(
"เพิ่มข้อมูล อสม. แล้ว"
);



}







function deleteVolunteer(i){


if(confirm("ลบข้อมูล อสม. หรือไม่")){


volunteers.splice(i,1);


showSummary();

showTable();


}


}





loadVolunteerAdmin();
