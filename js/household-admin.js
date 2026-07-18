let households=[];


fetch("../data/household.json")

.then(res=>res.json())

.then(data=>{

households=data;

showHouse();

summary();

});





function showHouse(){


let html="";


households.forEach(h=>{


html+=`

<tr>


<td>
${h.houseNo}
</td>


<td>
${h.head}
</td>


<td>
${h.members}
คน
</td>


<td>
${h.elderly}
คน
</td>


<td>
${h.vulnerable}
คน
</td>


<td>
${h.water}
</td>


<td>
${h.status}
</td>


</tr>


`;


});


document.getElementById(
"house-table"
).innerHTML=html;


}





function summary(){


let total =
households.length;



let people =
households.reduce(
(a,b)=>a+b.members,0
);



let elderly =
households.reduce(
(a,b)=>a+b.elderly,0
);



let vulnerable =
households.reduce(
(a,b)=>a+b.vulnerable,0
);



document.getElementById(
"house-summary"
).innerHTML=

`

🏠 ครัวเรือน :
${total}
หลัง

<br>

👥 สมาชิกทั้งหมด :
${people}
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
