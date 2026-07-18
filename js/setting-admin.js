fetch("../data/setting.json")

.then(res=>res.json())

.then(data=>{


showVillage(data);

showAdmin(data);

showUsers(data.users);


});





function showVillage(s){


document.getElementById(
"village-setting"
).innerHTML=

`

🏡 ${s.villageName}

<br>

📍 ${s.villageNo}

${s.tambon}

${s.district}

${s.province}


<br><br>

🖼 โลโก้

<br>

<img src="${s.logo}" width="120">


`;



}







function showAdmin(s){


document.getElementById(
"admin-setting"
).innerHTML=

`

👤 ${s.admin}

<br>

ตำแหน่ง :

${s.position}


<br>

📞 ${s.phone}


`;



}






function showUsers(users){


let html="";


users.forEach(u=>{


html+=`

<p>

👤 ${u.name}

<br>

🔑 สิทธิ์ :

${u.role}

</p>

<hr>

`;

});


document.getElementById(
"user-role"
).innerHTML=html;


}
