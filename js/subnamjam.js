// =====================================
// Rongkhem Smart Village
// Subnamjam Module v1.0
// =====================================

class SubnamjamManager {

    constructor(){

        this.data = [];

    }


    async load(){

        this.data =
        await API.load("subnamjam.json");

        return this.data;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.data.forEach(item=>{


            container.innerHTML += `

            <div class="subnamjam-card">


                <img src="${item.image || 'images/no-image.jpg'}">


                <h3>
                💧 ${item.name || ""}
                </h3>


                <p>
                ประเภท :
                ${item.type || "-"}
                </p>


                <p>
                รายละเอียด :
                ${item.detail || "-"}
                </p>


                <p>
                📍 พิกัด :
                ${item.location || "-"}
                </p>


            </div>

            `;


        });


    }


    count(){

        return this.data.length;

    }


    search(keyword){

        return this.data.filter(item =>


            JSON.stringify(item)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )


        );

    }


}


const SUBNAMJAM =
new SubnamjamManager();
