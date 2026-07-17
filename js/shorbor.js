// =====================================
// Rongkhem Smart Village
// SHORBOR Module v1.0
// =====================================

class ShorborManager {

    constructor(){

        this.members = [];

    }


    async load(){

        this.members =
        await API.load("vrv.json");

        return this.members;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.members.forEach(person=>{


            container.innerHTML += `

            <div class="shorbor-card">

                <img src="${person.image || 'images/no-image.jpg'}">


                <h3>
                👮 ${person.name || ""}
                </h3>


                <p>
                หน้าที่ :
                ${person.detail || "-"}
                </p>


                <p>
                สถานะ :
                ${person.status || "ปฏิบัติหน้าที่"}
                </p>


            </div>

            `;


        });


    }


    count(){

        return this.members.length;

    }


    search(keyword){

        return this.members.filter(person =>

            JSON.stringify(person)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }


}


const SHORBOR =
new ShorborManager();
