// =====================================
// Rongkhem Smart Village
// Activity Module v1.0
// =====================================

class ActivityManager {

    constructor(){

        this.activities = [];

    }


    async load(){

        this.activities =
        await API.load("activity.json");

        return this.activities;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.activities.forEach(item=>{


            container.innerHTML += `

            <div class="activity-card">


                <img src="${item.image || 'images/no-image.jpg'}">


                <h3>
                ${item.title}
                </h3>


                <p>
                📅 ${item.date}
                </p>


                <p>
                ${item.detail || ""}
                </p>


            </div>

            `;


        });


    }


    latest(limit=6){

        return [...this.activities]
        .reverse()
        .slice(0,limit);

    }


    search(keyword){


        return this.activities.filter(item=>


            item.title
            .toLowerCase()
            .includes(keyword.toLowerCase())


        );


    }


}


const ACTIVITY =
new ActivityManager();
