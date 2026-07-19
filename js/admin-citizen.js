let citizens=[];



async function loadCitizen(){


const data =
await fetch(
"data/citizen.json"
)
.then(r=>r.json());


citizens=data.citizens;


showSummary();

showTable();


}





function showSummary(){


document.getElementById(
"total"
).innerHTML=
citizens.length;



document.getElementById(
"male"
).innerHTML=

citizens.filter(
c=>c.gender=="ชาย"
).length;




document.getElementById(
"female"
).innerHTML=

citizens.filter(
c=>c.gender=="หญิง"
).length;




document.getElementById(
"elderly"
).innerHTML=

citizens.filter(
c=>c.age>=60
).length;


}





function showTable(){


let html="";



citizens.forEach((c,i)=>{


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
</td>


<td>
${c.house}
</td>


<td>

<button onclick="deleteCitizen(${i})">

ลบ

</button>

</td>


</tr>

`;



});



document.getElementById(
"citizenTable"
)
.innerHTML=html;



}







function addCitizen(){


let person={


id:
Date.now(),


name:
document.getElementById("name").value,


gender:
document.getElementById("gender").value,


age:
Number(
document.getElementById("age").value
),


house:
document.getElementById("house").value


};



citizens.push(person);



showSummary();

showTable();


alert(
"เพิ่มข้อมูลเรียบร้อย"
);



}







function deleteCitizen(i){


if(confirm("ลบข้อมูลนี้หรือไม่")){


citizens.splice(i,1);


showSummary();

showTable();


}


}






loadCitizen();
