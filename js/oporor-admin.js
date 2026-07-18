let oporor=[];


fetch("../data/oporor.json")

.then(res=>res.json())

.then(data=>{


oporor=data;


showOporor();

summary();


});





function showOporor(){


let html="";


oporor.forEach(o=>{


html+=`

<tr>


<td>
${o.name}
</td>


<td>
${o.group}
</td>


<td>
${o.role}
</td>


<td>
${o.area}
</td>


<td>
${o.duty}
</td>


<td>
${o.status}
</td>


</tr>


`;


});



document.getElementById(
"oporor-table"
).innerHTML=html;


}





function summary(){


let total =
oporor.length;


let opr =
oporor.filter(
x=>x.group=="อปพร."
).length;



let chrb =
oporor.filter(
x=>x.group=="ชรบ."
).length;



document.getElementById(
"oporor-summary"
).innerHTML=

`

🚑 อปพร. :
${opr}
คน

<br>

🛡 ชรบ. :
${chrb}
คน

<br>

👥 รวมอาสาความปลอดภัย :
${total}
คน

`;



}
