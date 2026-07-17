// =====================================
// Rongkhem Smart Village
// Citizen Module v1.0
// =====================================

class CitizenManager {

    constructor(){

        this.citizens = [];

    }


    async load(){

        this.citizens =
        await API.load("citizen.json");

        return this.citizens;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML = "";


        this.citizens.forEach(person=>{


            container.innerHTML += `

            <div class="citizen-card">

                <h3>
                👤 ${person.name || ""}
                </h3>

                <p>
                เพศ : ${person.gender || "-"}
                </p>

                <p>
                อายุ : ${person.age || "-"}
                </p>

                <p>
                บ้านเลขที่ : ${person.house || "-"}
                </p>

            </div>

            `;


        });


    }


    search(keyword){

        return this.citizens.filter(person =>

            JSON.stringify(person)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }


    count(){

        return this.citizens.length;

    }


}


const CITIZEN =
new CitizenManager();
