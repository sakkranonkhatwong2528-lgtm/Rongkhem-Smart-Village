let users=[];


fetch("../data/user.json")

.then(res=>res.json())

.then(data=>{


users=data;


showUsers();

summary();


});





function showUsers(){


let html="";


users.forEach(u=>{


html+=`

<tr>


<td>
${u.name}
</td>


<td>
${u.username}
</td>


<td>
${u.role}
</td>


<td>
${u.department}
</td>


<td>
${u.status}
</td>


</tr>


`;

});


document.getElementById(
"user-table"
).innerHTML=html;


}





function summary(){


let total =
users.length;


let admin =
users.filter(
x=>x.role=="Administrator"
).length;


document.getElementById(
"user-summary"
).innerHTML=

`

👤 ผู้ใช้งานทั้งหมด :

${total}

คน


<br>


🔐 Administrator :

${admin}

คน


`;

}
