// =====================================
// Rongkhem Smart Village
// OPPOR Module v1.0
// =====================================

class OPPORManager {

    constructor(){

        this.members = [];

    }


    async load(){

        this.members =
        await API.load("oporor.json");

        return this.members;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.members.forEach(person=>{


            container.innerHTML += `

            <div class="oppor-card">

                <img src="${person.image || 'images/no-image.jpg'}">


                <h3>
                🚨 ${person.name || ""}
                </h3>


                <p>
                ตำแหน่ง :
                ${person.position || "อปพร."}
                </p>


                <p>
                หน้าที่ :
                ${person.detail || "-"}
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


const OPPOR =
new OPPORManager();
