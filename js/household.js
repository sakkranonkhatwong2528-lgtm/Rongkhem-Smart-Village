// =====================================
// Rongkhem Smart Village
// Household Module v1.0
// =====================================

class HouseholdManager {

    constructor(){

        this.households = [];

    }


    async load(){

        this.households =
        await API.load("household.json");

        return this.households;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML = "";


        this.households.forEach(home=>{


            container.innerHTML += `

            <div class="house-card">

                <h3>
                🏠 บ้านเลขที่ ${home.house || "-"}
                </h3>


                <p>
                หัวหน้าครัวเรือน :
                ${home.head || "-"}
                </p>


                <p>
                จำนวนสมาชิก :
                ${home.members || 0} คน
                </p>


                <p>
                หมู่ที่ :
                ${home.moo || "6"}
                </p>


            </div>

            `;


        });


    }


    search(keyword){

        return this.households.filter(home =>


            JSON.stringify(home)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }


    count(){

        return this.households.length;

    }


}


const HOUSEHOLD =
new HouseholdManager();
