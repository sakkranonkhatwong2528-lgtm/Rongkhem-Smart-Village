let health=[];


fetch("../data/health.json")

.then(res=>res.json())

.then(data=>{

health=data;

showHealth();

summary();

});





function showHealth(){


let html="";


health.forEach(h=>{


html+=`

<tr>


<td>
${h.name}
</td>


<td>
${h.age}
</td>


<td>
${h.group}
</td>


<td>
${h.health}
</td>


<td>
${h.care}
</td>


<td>
${h.status}
</td>


</tr>

`;


});


document.getElementById(
"health-table"
).innerHTML=html;


}





function summary(){


let elderly =
health.filter(
x=>x.group=="ผู้สูงอายุ"
).length;



let vulnerable =
health.filter(
x=>x.group=="กลุ่มเปราะบาง"
).length;



let follow =
health.filter(
x=>x.status=="ติดตาม"
).length;



document.getElementById(
"health-summary"
).innerHTML=

`

👴 ผู้สูงอายุ :
${elderly}
คน

<br>

♿ กลุ่มเปราะบาง :
${vulnerable}
คน

<br>

❤️ ต้องติดตาม :
${follow}
คน


`;



}
