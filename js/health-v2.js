// =====================================
// Rongkhem Smart Village
// Health Module v2.0
// =====================================


class HealthManager {


constructor(){

this.data=[];

}



async load(){


const {data,error}=

await db
.from("health_profiles")
.select("*");



if(error){

console.log(error);

return [];

}


this.data=data;

return data;


}




count(type){


return this.data.filter(

item =>
item.health_type === type

).length;


}



renderDashboard(){


document
.getElementById(
"elderlyCount"
)
.innerHTML =
this.count("elderly");



document
.getElementById(
"bedriddenCount"
)
.innerHTML =
this.count("bedridden");



document
.getElementById(
"riskCount"
)
.innerHTML =
this.count("risk");


}


}


const HEALTH =
new HealthManager();
