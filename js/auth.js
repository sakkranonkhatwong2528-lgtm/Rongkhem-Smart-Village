// ตรวจสอบการเข้าสู่ระบบ

function checkLogin(){

let user =
localStorage.getItem("loginUser");


if(!user){

window.location.href="login.html";

}

}


// แสดงชื่อผู้ใช้งาน

function showUser(){

let user =
JSON.parse(
localStorage.getItem("loginUser")
);


let box =
document.getElementById("userName");


if(user && box){

box.innerHTML =
"👤 "+user.name+
" ("+user.role+")";

}

}


// ออกจากระบบ

function logout(){

localStorage.removeItem("loginUser");

window.location.href="login.html";

}
