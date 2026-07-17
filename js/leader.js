// =====================================
// Rongkhem Smart Village
// Leader Module v1.0
// =====================================

class LeaderManager {

    constructor(){

        this.leaders = [];

    }


    async load(){

        this.leaders =
        await API.load("leader.json");

        return this.leaders;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.leaders.forEach(person=>{


            container.innerHTML += `

            <div class="leader-card">


                <img src="${person.image || 'images/no-image.jpg'}">


                <h3>
                ${person.name}
                </h3>


                <h4>
                ${person.position}
                </h4>


                <p>
                ${person.detail}
                </p>


            </div>

            `;


        });


    }


    search(keyword){

        return this.leaders.filter(person=>


            JSON.stringify(person)
            .toLowerCase()
            .includes(keyword.toLowerCase())


        );


    }


    filter(position){

        return this.leaders.filter(person=>

            person.position.includes(position)

        );

    }


}


const LEADER =
new LeaderManager();
