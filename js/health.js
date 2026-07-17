// =====================================
// Rongkhem Smart Village
// Health Module v1.0
// =====================================

class HealthManager {

    constructor(){

        this.health = [];

    }


    async load(){

        this.health =
        await API.load("health.json");

        return this.health;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.health.forEach(item=>{


            container.innerHTML += `

            <div class="health-card">

                <h3>
                🩺 ${item.name || ""}
                </h3>

                <p>
                ประเภท :
                ${item.type || "-"}
                </p>

                <p>
                สถานะ :
                ${item.status || "-"}
                </p>

                <p>
                ผู้ดูแล :
                ${item.volunteer || "-"}
                </p>

            </div>

            `;


        });


    }


    count(){

        return this.health.length;

    }


    filter(type){

        return this.health.filter(item =>

            item.type.includes(type)

        );

    }


}


const HEALTH =
new HealthManager();
