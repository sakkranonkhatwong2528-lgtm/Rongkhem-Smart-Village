let vulnerable=[];



async function loadVulnerableAdmin(){


const data =
await fetch(
"data/vulnerable.json"
)

.then(r=>r.json());


vulnerable=data.vulnerable;


showSummary();

showTable();


}





function showSummary(){


document.getElementById(
"total"
)
.innerHTML =
vulnerable.length;



document.getElementById(
"special"
)
.innerHTML =

vulnerable.filter(

v=>v.level=="ดูแลพิเศษ"

).length;



document.getElementById(
"follow"
)
.innerHTML =

vulnerable.filter(

v=>v.level=="ติดตาม"

).length;



}





function showTable(){


let html="";


vulnerable.forEach((v,i)=>{


html+=`

<tr>


<td>
${v.name}
</td>


<td>
${v.type}
</td>


<td>
${v.level}
</td>



<td>

<button onclick="deleteVulnerable(${i})">

ลบ

</button>

</td>


</tr>


`;



});



document.getElementById(
"vTable"
)
.innerHTML=html;


}







function addVulnerable(){


let data={


id:Date.now(),


name:
document.getElementById("name").value,


age:
Number(
document.getElementById("age").value
),


type:
document.getElementById("type").value,


house:
document.getElementById("house").value,


support:"ติดตามโดย อสม.",


level:
document.getElementById("level").value


};



vulnerable.push(data);



showSummary();

showTable();


alert(
"เพิ่มข้อมูลเรียบร้อย"
);


}







function deleteVulnerable(i){


if(confirm("ลบข้อมูลนี้หรือไม่")){


vulnerable.splice(i,1);


showSummary();

showTable();


}


}




loadVulnerableAdmin();
