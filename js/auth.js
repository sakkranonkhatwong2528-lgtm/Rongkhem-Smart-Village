/*
=================================
Authentication System
Rongkhem Smart Village
=================================
*/


function checkLogin(){



let user =
localStorage.getItem(
"rongkhemUser"
);



if(!user){


alert(
"กรุณาเข้าสู่ระบบ"
);


window.location.href=
"login.html";


return;


}



return JSON.parse(user);



}






function showUser(){


let user =
checkLogin();



let box =
document.getElementById(
"userInfo"
);



if(box){


box.innerHTML=`

👤 ${user.name}

<br>

สิทธิ์:
${user.role}

`;


}



}







function logout(){


localStorage.removeItem(
"rongkhemUser"
);


window.location.href=
"login.html";


}
