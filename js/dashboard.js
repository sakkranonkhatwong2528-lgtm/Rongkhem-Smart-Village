// =====================================
// Rongkhem Smart Village
// Dashboard Pro v1.0
// =====================================


class DashboardManager {


    async loadData(){


        const citizen =
        await API.load("citizen.json");


        const household =
        await API.load("household.json");


        const health =
        await API.load("health.json");


        const vulnerable =
        await API.load("vulnerable.json");


        const osm =
        await API.load("osm.json");


        const oppor =
        await API.load("oporor.json");


        const shorbor =
        await API.load("vrv.json");


        const subnamjam =
        await API.load("subnamjam.json");



        this.render({

            citizen: citizen.length,

            household: household.length,

            health: health.length,

            vulnerable: vulnerable.length,

            osm: osm.length,

            oppor: oppor.length,

            shorbor: shorbor.length,

            subnamjam: subnamjam.length

        });


    }



    render(data){


        document.getElementById("citizenCount")
        .innerHTML=data.citizen;


        document.getElementById("householdCount")
        .innerHTML=data.household;


        document.getElementById("healthCount")
        .innerHTML=data.health;


        document.getElementById("vulnerableCount")
        .innerHTML=data.vulnerable;


        document.getElementById("osmCount")
        .innerHTML=data.osm;


        document.getElementById("opporCount")
        .innerHTML=data.oppor;


        document.getElementById("shorborCount")
        .innerHTML=data.shorbor;


        document.getElementById("subnamjamCount")
        .innerHTML=data.subnamjam;


    }


}

fetch("data/budget.json")

.then(res=>res.json())

.then(data=>{


let income =
data.filter(
x=>x.type=="รายรับ"
)
.reduce(
(a,b)=>a+b.amount,0
);


let expense =
data.filter(
x=>x.type=="รายจ่าย"
)
.reduce(
(a,b)=>a+b.amount,0
);


document.getElementById(
"budget-total"
).innerHTML=

`

💰 เงินคงเหลือ

<br>

${(income-expense).toLocaleString()}
บาท

`;

});

const DASHBOARD =
new DashboardManager();
fetch("data/project.json")

.then(res=>res.json())

.then(data=>{


document.getElementById(
"project-count"
).innerHTML=

`
📌 โครงการทั้งหมด
<br>
${data.length}
`;

});
