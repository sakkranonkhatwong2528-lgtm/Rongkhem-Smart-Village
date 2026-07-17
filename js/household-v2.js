// =====================================
// Rongkhem Smart Village
// Household Module v2.0
// =====================================


class HouseholdManager {


constructor(){

this.households=[];

}



async load(){


const {data,error}=

await db
.from("households")
.select(`
*,
household_members(*)
`);



if(error){

console.log(error);

return [];

}



this.households=data;

return data;


}




render(container){


const box =
document.getElementById(container);



box.innerHTML="";



this.households.forEach(home=>{


box.innerHTML += `

<div class="house-card">


<h3>
🏠 บ้านเลขที่ ${home.house_no}
</h3>


<p>
เจ้าของบ้าน :
${home.owner_name}
</p>


<p>
จำนวนสมาชิก :
${home.family_count}
คน
</p>


<p>
สมาชิกกลุ่มเสี่ยง :
${home.household_members
.length}
</p>


</div>


`;


});


}



}


const HOUSEHOLD =
new HouseholdManager();
