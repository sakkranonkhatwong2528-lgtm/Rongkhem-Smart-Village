// =====================================
// Rongkhem Smart Village
// OSM Module v1.0
// =====================================

class OSMManager {

    constructor(){

        this.osm = [];

    }


    async load(){

        this.osm =
        await API.load("osm.json");

        return this.osm;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.osm.forEach(person=>{


            container.innerHTML += `

            <div class="osm-card">

                <img src="${person.image || 'images/no-image.jpg'}">


                <h3>
                🩺 ${person.name || ""}
                </h3>


                <p>
                ตำแหน่ง :
                ${person.position || "อสม."}
                </p>


                <p>
                พื้นที่รับผิดชอบ :
                ${person.area || "-"}
                </p>


                <p>
                งาน :
                ${person.task || "-"}
                </p>

            </div>

            `;


        });


    }


    count(){

        return this.osm.length;

    }


    search(keyword){

        return this.osm.filter(person =>

            JSON.stringify(person)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }


}


const OSM =
new OSMManager();
