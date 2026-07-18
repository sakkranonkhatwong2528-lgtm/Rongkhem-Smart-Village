let elderly=[];


fetch("../data/elderly.json")

.then(res=>res.json())

.then(data=>{

elderly=data;

showElderly();

summary();

});





function showElderly(){


let html="";


elderly.forEach(e=>{


html+=`

<tr>


<td>
${e.name}
</td>


<td>
${e.age}
ปี
</td>


<td>
${e.house}
</td>


<td>
${e.health}
</td>


<td>
${e.care}
</td>


<td>
${e.visit}
</td>


</tr>


`;


});


document.getElementById(
"elderly-table"
).innerHTML=html;


}





function summary(){


let total =
elderly.length;


let sick =
elderly.filter(
x=>x.health!="ทั่วไป"
).length;



document.getElementById(
"elderly-summary"
).innerHTML=

`

👴 ผู้สูงอายุทั้งหมด :
${total}
คน

<br>

❤️ ต้องติดตามสุขภาพ :
${sick}
คน


`;



}
