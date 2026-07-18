let citizens=[];


fetch("../data/citizen.json")

.then(res=>res.json())

.then(data=>{

citizens=data;

showCitizen();

summary();

});





function showCitizen(){


let html="";


citizens.forEach(c=>{


html+=`

<tr>


<td>
${c.name}
</td>


<td>
${c.gender}
</td>


<td>
${c.age}
ปี
</td>


<td>
${c.house}
</td>


<td>

${c.elderly?"👴 ใช่":"-"}

</td>


<td>

${c.vulnerable?"♿ ใช่":"-"}

</td>


</tr>


`;


});


document.getElementById(
"citizen-table"
).innerHTML=html;


}





function summary(){


let total =
citizens.length;


let male =
citizens.filter(
x=>x.gender=="ชาย"
).length;



let female =
citizens.filter(
x=>x.gender=="หญิง"
).length;



let elderly =
citizens.filter(
x=>x.elderly
).length;



let vulnerable =
citizens.filter(
x=>x.vulnerable
).length;




document.getElementById(
"citizen-summary"
).innerHTML=

`

👥 ประชากรทั้งหมด :
${total}
คน

<br>

👨 ชาย :
${male}
คน

<br>

👩 หญิง :
${female}
คน

<br>

👴 ผู้สูงอายุ :
${elderly}
คน

<br>

♿ เปราะบาง :
${vulnerable}
คน

`;



}
