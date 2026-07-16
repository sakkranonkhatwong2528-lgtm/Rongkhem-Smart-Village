// Rongkhem Smart Village
// ระบบจัดการข้อมูลหมู่บ้าน

async function loadOrganization(){

    const response = await fetch("data/organization.json");

    const data = await response.json();


    let area = document.getElementById("leader-list");


    if(area){

        area.innerHTML="";


        data.leaders.forEach(person=>{


            area.innerHTML += `

            <div class="card">


                <img src="assets/images/${person.image}">


                <h3>
                ${person.position}
                </h3>


                <h4>
                ${person.name}
                </h4>


                <p>
                ${person.department}
                </p>


                <p>
                ${person.duty}
                </p>


            </div>

            `;


        });


    }

}



// โหลดข้อมูลเมื่อเปิดหน้าเว็บ

document.addEventListener(
"DOMContentLoaded",
()=>{

loadOrganization();

});
