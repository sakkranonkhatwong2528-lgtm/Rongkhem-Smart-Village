// =====================================
// Rongkhem Smart Village
// Admin Center v1.0
// =====================================


class AdminManager {


    constructor(){

        this.user = null;

    }


    login(username,password){


        const admin = {

            username:"admin",

            password:"123456",

            role:"ผู้ดูแลระบบ"

        };


        if(
            username === admin.username &&
            password === admin.password
        ){

            this.user = admin;


            localStorage.setItem(
                "admin",
                JSON.stringify(admin)
            );


            return true;

        }


        return false;


    }



    logout(){

        localStorage.removeItem("admin");

        this.user=null;

    }



    check(){

        return localStorage.getItem("admin");

    }



}


const ADMIN =
new AdminManager();
