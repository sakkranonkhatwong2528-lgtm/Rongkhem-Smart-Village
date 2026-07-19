let houses=[];



async function loadHouseAdmin(){


const data =
await fetch(
"data/household.json"
)

.then(r=>r.json());


houses=data.households;


showSummary();

showTable();


}







function showSummary(){


document.getElementById(
"totalHouse"
)
.innerHTML =
houses.length;



document.getElementById(
"totalMember"
)
.innerHTML =

houses.reduce(

(sum,h)=>sum+h.members,

0

);




document.getElementById(
"elderHouse"
)
.innerHTML =

houses.filter(

h=>h.elderly>0

).length;





document.getElementById(
"vulnerableHouse"
)
.innerHTML =

houses.filter(

h=>h.vulnerable>0

).length;



}







function showTable(){


let html="";


houses.forEach((h,i)=>{


html+=`

<tr>

<td>
${h.houseNo}
</td>


<td>
${h.owner}
</td>


<td>
${h.members}
</td>


<td>

<button onclick="removeHouse(${i})">

ลบ

</button>


</td>


</tr>


`;



});


document.getElementById(
"houseTable"
)
.innerHTML=html;


}







function addHouse(){


let h={


id:Date.now(),


houseNo:
document.getElementById(
"houseNo"
).value,


owner:
document.getElementById(
"owner"
).value,


members:Number(
document.getElementById(
"members"
).value
),


elderly:0,

vulnerable:0


};



houses.push(h);



showSummary();

showTable();


alert(
"เพิ่มข้อมูลครัวเรือนแล้ว"
);


}







function removeHouse(i){


if(confirm("ลบข้อมูลครัวเรือน?")){


houses.splice(i,1);


showSummary();

showTable();


}


}






loadHouseAdmin();
