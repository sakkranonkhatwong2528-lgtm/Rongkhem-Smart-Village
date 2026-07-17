// =====================================
// Rongkhem Smart Village
// Security Module v1.0
// =====================================


class SecurityManager {


constructor(){

    this.user=null;

}



login(username,role){


this.user={

username:username,

role:role,

loginTime:
new Date()

};


localStorage.setItem(

"currentUser",

JSON.stringify(this.user)

);


return true;


}




getUser(){


let user =
localStorage.getItem(
"currentUser"
);


return user ?
JSON.parse(user)
:null;


}




logout(){


localStorage.removeItem(
"currentUser"
);


}




checkRole(role){


let user =
this.getUser();


if(!user) return false;


return user.role === role;


}



}



const SECURITY =
new SecurityManager();
