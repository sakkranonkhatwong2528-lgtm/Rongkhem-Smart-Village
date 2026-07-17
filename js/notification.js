// =====================================
// Rongkhem Smart Village
// Notification Module v1.0
// =====================================


class NotificationManager {


    constructor(){

        this.notifications=[];

    }



    async load(){

        this.notifications =
        await API.load("notification.json");

        return this.notifications;

    }



    render(containerId){


        const box =
        document.getElementById(containerId);


        if(!box) return;


        box.innerHTML="";


        this.notifications
        .forEach(item=>{


            box.innerHTML += `

            <div class="notification-card">


                <h3>
                🔔 ${item.title}
                </h3>


                <p>
                ${item.date}
                </p>


                <p>
                ${item.detail}
                </p>


            </div>


            `;


        });


    }



    latest(limit=5){

        return this.notifications
        .slice(0,limit);

    }



}


const NOTIFICATION =
new NotificationManager();
