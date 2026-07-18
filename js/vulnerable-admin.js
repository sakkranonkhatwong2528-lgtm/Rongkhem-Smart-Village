let vulnerable=[];


fetch("../data/vulnerable.json")

.then(res=>res.json())

.then(data=>{

vulnerable=data;

showVulnerable();

summary();

});





function showVulnerable(){


let html="";


vulnerable.forEach(v=>{


html+=`

<tr>


<td>
${v.name}
</td>


<td>
${v.type}
</td>


<td>
${v.age==0?"-":v.age}
</td>


<td>
${v.house}
</td>


<td>
${v.problem}
</td>


<td>
${v.support}
</td>


<td>

<select onchange="changeStatus(${v.id},this.value)">


<option ${v.status=="ติดตาม"?"selected":""}>
ติดตาม
</option>


<option ${v.status=="ดำเนินการแล้ว"?"selected":""}>
ดำเนินการแล้ว
</option>


</select>


</td>


</tr>

`;


});


document.getElementById(
"vulnerable-table"
).innerHTML=html;


}





function changeStatus(id,status){


let item =
vulnerable.find(
x=>x.id==id
);


item.status=status;


summary();


}





function summary(){


let total =
vulnerable.length;


let disabled =
vulnerable.filter(
x=>x.type=="ผู้พิการ"
).length;


let follow =
vulnerable.filter(
x=>x.status=="ติดตาม"
).length;



document.getElementById(
"vulnerable-summary"
).innerHTML=

`

♿ ทั้งหมด :
${total}
รายการ

<br>

ผู้พิการ :
${disabled}
คน

<br>

ต้องติดตาม :
${follow}
รายการ


`;



}
