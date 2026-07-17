// =====================================
// Rongkhem Smart Village
// Vulnerable Module v1.0
// =====================================

class VulnerableManager {

    constructor(){

        this.people = [];

    }


    async load(){

        this.people =
        await API.load("vulnerable.json");

        return this.people;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.people.forEach(person=>{


            container.innerHTML += `

            <div class="vulnerable-card">

                <h3>
                ❤️ ${person.name || ""}
                </h3>


                <p>
                ประเภท :
                ${person.type || "-"}
                </p>


                <p>
                บ้านเลขที่ :
                ${person.house || "-"}
                </p>


                <p>
                ผู้ดูแล :
                ${person.caregiver || "-"}
                </p>


            </div>

            `;


        });


    }


    count(){

        return this.people.length;

    }


    filter(type){

        return this.people.filter(person =>

            person.type.includes(type)

        );

    }


    search(keyword){

        return this.people.filter(person =>

            JSON.stringify(person)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }

}


const VULNERABLE =
new VulnerableManager();
