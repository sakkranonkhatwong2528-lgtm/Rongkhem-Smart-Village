let notifications=[];


fetch("../data/notification.json")

.then(res=>res.json())

.then(data=>{


notifications=data;


showNotification();

summary();


});





function showNotification(){


let html="";


notifications.forEach(n=>{


html+=`

<tr>


<td>
${n.title}
</td>


<td>
${n.type}
</td>


<td>
${n.date}
</td>


<td>
${n.level}
</td>


<td>
${n.detail}
</td>


</tr>


`;

});


document.getElementById(
"notification-table"
).innerHTML=html;


}





function summary(){


let total =
notifications.length;


let urgent =
notifications.filter(
x=>x.level=="ด่วน"
).length;



let important =
notifications.filter(
x=>x.level=="สำคัญ"
).length;



document.getElementById(
"notification-summary"
).innerHTML=

`

🔔 ทั้งหมด :

${total}

รายการ


<br>


🚨 ด่วน :

${urgent}

รายการ


<br>


⚠️ สำคัญ :

${important}

รายการ


`;



}
