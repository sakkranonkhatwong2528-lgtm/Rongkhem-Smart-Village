let activities=[];


fetch("../data/activity.json")

.then(res=>res.json())

.then(data=>{


activities=data;


showActivity();

summary();


});





function showActivity(){


let html="";


activities.forEach(a=>{


html+=`

<tr>


<td>
${a.title}
</td>


<td>
${a.type}
</td>


<td>
${a.date}
</td>


<td>
${a.place}
</td>


<td>
${a.people}
คน
</td>


<td>
${a.result}
</td>


</tr>


`;


});


document.getElementById(
"activity-table"
).innerHTML=html;


}





function summary(){


let total =
activities.length;


let people =
activities.reduce(
(a,b)=>a+b.people,0
);



document.getElementById(
"activity-summary"
).innerHTML=

`

📅 จำนวนกิจกรรม :
${total}
กิจกรรม

<br>

👥 ผู้เข้าร่วมรวม :
${people}
คน


`;



}
