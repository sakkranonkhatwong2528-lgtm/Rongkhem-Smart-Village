
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
${n.detail}
</td>


<td>
${n.level}
</td>


<td>
${n.date}
</td>


<td>


<select onchange="changeStatus(${n.id},this.value)">


<option ${n.status=="เผยแพร่"?"selected":""}>
เผยแพร่
</option>


<option ${n.status=="ซ่อน"?"selected":""}>
ซ่อน
</option>


</select>


</td>


</tr>


`;


});


document.getElementById(
"notification-table"
).innerHTML=html;


}





function changeStatus(id,status){


let n =
notifications.find(
x=>x.id==id
);


n.status=status;


summary();


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

<br>

🚨 ด่วน :
${urgent}

<br>

⚠️ สำคัญ :
${important}

`;



}
