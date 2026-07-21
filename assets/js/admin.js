/* ==================================================
   RONGKHEM SMART VILLAGE
   ADMIN AUTH SYSTEM
   Version 1.0
================================================== */


/* ---------- Login ---------- */


async function login(){


    const username =

    document.getElementById("username").value;



    const password =

    document.getElementById("password").value;



    const error =

    document.getElementById("error");




    try{


        const response = await fetch(

            "../data/users.json"

        );



        const users = await response.json();




        const user = users.find(u =>

            u.username === username &&

            u.password === password &&

            u.status === "active"

        );





        if(user){



            localStorage.setItem(

                "rk_user",

                JSON.stringify(user)

            );



            window.location.href =

            "admin-dashboard.html";



        }


        else{



            error.innerHTML =

            "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";


        }



    }


    catch(err){


        error.innerHTML =

        "⚠️ ไม่สามารถเชื่อมต่อระบบได้";


        console.error(err);


    }



}







/* ---------- Check Login ---------- */


function checkLogin(){



    const user =

    localStorage.getItem(

        "rk_user"

    );



    if(!user){


        window.location.href =

        "admin-login.html";


    }



    return JSON.parse(user);



}







/* ---------- Logout ---------- */


function logout(){


    localStorage.removeItem(

        "rk_user"

    );



    window.location.href =

    "admin-login.html";


}







/* ---------- Show User ---------- */


function showUser(){



    const box =

    document.getElementById(

        "adminUser"

    );



    if(!box)return;



    const user = checkLogin();



    box.innerHTML = `

    👤 ${user.name}

    <br>

    🔑 ${user.role}

    `;



}
