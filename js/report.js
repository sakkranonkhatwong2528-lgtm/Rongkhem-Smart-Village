// =====================================
// Rongkhem Smart Village
// Report Module v1.0
// =====================================


class ReportManager {


    async load(){


        const citizen =
        await API.load("citizen.json");


        const household =
        await API.load("household.json");


        const health =
        await API.load("health.json");


        const vulnerable =
        await API.load("vulnerable.json");


        const activity =
        await API.load("activity.json");



        this.data = {

            citizen: citizen.length,

            household: household.length,

            health: health.length,

            vulnerable: vulnerable.length,

            activity: activity.length

        };


        this.render();


    }



    render(){


        document
        .getElementById("reportBox")
        .innerHTML = `


        <h2>
        📊 รายงานสรุปหมู่บ้านร่องเข็ม
        </h2>


        <p>
        👥 ประชาชน :
        ${this.data.citizen}
        คน
        </p>


        <p>
        🏠 ครัวเรือน :
        ${this.data.household}
        หลัง
        </p>


        <p>
        🩺 ข้อมูลสุขภาพ :
        ${this.data.health}
        ราย
        </p>


        <p>
        ❤️ กลุ่มเปราะบาง :
        ${this.data.vulnerable}
        ราย
        </p>


        <p>
        📸 กิจกรรม :
        ${this.data.activity}
        รายการ
        </p>


        `;


    }


}



const REPORT =
new ReportManager();
