/*
==============================
Rongkhem Smart Village Login
==============================
*/


async function login(){


let username =
document.getElementById(
"username"
).value;



let password =
document.getElementById(
"password"
).value;





let users =
await fetch(
"data/users.json"
)
.then(r=>r.json());





let user =
users.find(

u=>

u.username==username
&&
u.password==password

);






if(user){



localStorage.setItem(

"rongkhemUser",

JSON.stringify(user)

);





alert(
"เข้าสู่ระบบสำเร็จ"
);



window.location.href =
"admin.html";



}

else{


alert(
"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
);


}



}
