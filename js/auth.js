/* ==========================================
   RONGKHEM SMART VILLAGE
   AUTH SYSTEM v1.0
   ========================================== */


/* ==========================================
   SESSION
   ========================================== */

function getSession(){

    const localSession =
        localStorage.getItem(
            "rongkhem_session"
        );

    const temporarySession =
        sessionStorage.getItem(
            "rongkhem_session"
        );


    if(localSession){

        try{

            return JSON.parse(localSession);

        }catch{

            localStorage.removeItem(
                "rongkhem_session"
            );

        }

    }


    if(temporarySession){

        try{

            return JSON.parse(
                temporarySession
            );

        }catch{

            sessionStorage.removeItem(
                "rongkhem_session"
            );

        }

    }


    return null;

}


/* ==========================================
   CHECK LOGIN
   ========================================== */

function requireLogin(){

    const session =
        getSession();


    if(!session){

        window.location.href =
            "login.html";

        return false;

    }


    return true;

}


/* ==========================================
   CHECK ADMIN
   ========================================== */

function requireAdmin(){

    const session =
        getSession();


    if(!session){

        window.location.href =
            "login.html";

        return false;

    }


    if(session.role !== "admin"){

        alert(
            "คุณไม่มีสิทธิ์เข้าถึงส่วนนี้"
        );

        window.location.href =
            "index.html";

        return false;

    }


    return true;

}


/* ==========================================
   LOGOUT
   ========================================== */

function logout(){

    const confirmLogout =
        confirm(
            "ต้องการออกจากระบบหรือไม่?"
        );


    if(!confirmLogout){

        return;

    }


    localStorage.removeItem(
        "rongkhem_session"
    );


    sessionStorage.removeItem(
        "rongkhem_session"
    );


    window.location.href =
        "login.html";

}


/* ==========================================
   USER INFO
   ========================================== */

function getCurrentUser(){

    return getSession();

}


/* ==========================================
   DISPLAY USER
   ========================================== */

function displayCurrentUser(){

    const session =
        getSession();


    if(!session){

        return;

    }


    const usernameElements =
        document.querySelectorAll(
            "[data-user]"
        );


    usernameElements.forEach(
        element=>{

            element.textContent =
                session.username || "ผู้ดูแลระบบ";

        }
    );


    const roleElements =
        document.querySelectorAll(
            "[data-role]"
        );


    roleElements.forEach(
        element=>{

            element.textContent =
                session.role === "admin"
                ? "ผู้ดูแลระบบ"
                : "ผู้ใช้งาน";

        }
    );

}


/* ==========================================
   AUTO CHECK
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        displayCurrentUser();

    }
);
