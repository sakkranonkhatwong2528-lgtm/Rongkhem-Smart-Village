/* ==================================================
   RONGKHEM SMART VILLAGE
   Dashboard System
   Version 1.0
================================================== */


/* ---------- Config ---------- */

const DATA_PATH = "data/";



/* ---------- Start ---------- */


document.addEventListener("DOMContentLoaded",()=>{


    loadDashboard();


    const printBtn = document.getElementById("printReport");


    if(printBtn){

        printBtn.addEventListener("click",()=>{

            window.print();

        });

    }


});





/* ---------- Main Loader ---------- */


async function loadDashboard(){


    try{


        const [

            village,

            citizen,

            health,

            leader,

            activity,

            news


        ] = await Promise.all([


            loadJSON("village.json"),

            loadJSON("citizen.json"),

            loadJSON("health.json"),

            loadJSON("leader.json"),

            loadJSON("activity.json"),

            loadJSON("news.json")


        ]);




        renderSummary(

            village,

            citizen,

            health,

            leader

        );



        renderStatus(

            village,

            health

        );



        renderCharts(

            citizen,

            health

        );



        renderNews(news);



    }


    catch(error){


        console.error(

            "Dashboard Error:",

            error

        );


        showError();



    }



}






/* ---------- JSON Loader ---------- */


async function loadJSON(file){


    const response = await fetch(

        DATA_PATH + file

    );



    if(!response.ok){

        throw new Error(

            "Cannot load "+file

        );

    }



    return await response.json();



}






/* ---------- Summary Card ---------- */


function renderSummary(

    village,

    citizen,

    health,

    leader

){



    setCounter(

        "totalHouse",

        village.households || 0

    );



    setCounter(

        "totalPeople",

        citizen.total || 0

    );



    setCounter(

        "elderly",

        citizen.elderly || 0

    );



    setCounter(

        "vulnerable",

        health.vulnerable || 0

    );



    setCounter(

        "leaders",

        leader.total || 0

    );



}







/* ---------- Counter Animation ---------- */


function setCounter(id,value){



    const element = document.getElementById(id);



    if(!element)return;



    let start = 0;



    const speed = value / 50;



    const timer=setInterval(()=>{


        start += speed;



        if(start>=value){


            start=value;


            clearInterval(timer);


        }



        element.innerText=

        Math.floor(start).toLocaleString();



    },20);



}







/* ---------- Village Status ---------- */


function renderStatus(

    village,

    health

){


    const box=

    document.getElementById(

        "villageStatus"

    );



    if(!box)return;




    box.innerHTML=`

    <div class="status-box">

        <h4>🌱 สิ่งแวดล้อม</h4>

        <span class="status status-good">

        ${village.environment || "ปกติ"}

        </span>

    </div>


    <div class="status-box">

        <h4>❤️ สุขภาพ</h4>

        <span class="status status-good">

        ${health.status || "พร้อม"}

        </span>

    </div>


    <div class="status-box">

        <h4>🛡 ความปลอดภัย</h4>

        <span class="status status-good">

        Smart Security

        </span>

    </div>


    <div class="status-box">

        <h4>🏡 การพัฒนา</h4>

        <span class="status status-good">

        Smart Village

        </span>

    </div>


    `;



}







/* ---------- Chart ---------- */


function renderCharts(

    citizen,

    health

){



    const ageChart =

    document.getElementById(

        "ageChart"

    );



    if(ageChart){



        new Chart(

            ageChart,

            {


            type:"doughnut",


            data:{


                labels:[

                    "เด็ก",

                    "วัยทำงาน",

                    "ผู้สูงอายุ"

                ],


                datasets:[{


                    data:[

                        citizen.child || 0,

                        citizen.worker || 0,

                        citizen.elderly || 0

                    ]


                }]

            }


        });



    }





    const healthChart =

    document.getElementById(

        "healthChart"

    );



    if(healthChart){



        new Chart(

            healthChart,

            {


            type:"bar",


            data:{


                labels:[

                    "กลุ่มปกติ",

                    "กลุ่มเสี่ยง",

                    "เปราะบาง"

                ],


                datasets:[{


                    label:"สุขภาพประชาชน",


                    data:[

                        health.normal || 0,

                        health.risk || 0,

                        health.vulnerable || 0

                    ]


                }]


            }


        });



    }




}







/* ---------- News ---------- */


function renderNews(news){



    const box=

    document.getElementById(

        "latestNews"

    );



    if(!box)return;



    box.innerHTML="";



    news.slice(0,5)

    .forEach(item=>{


        box.innerHTML += `


        <div class="news-item">


            <div>


            <div class="news-title">

            📰 ${item.title}

            </div>


            <div class="news-date">

            ${item.date || ""}

            </div>


            </div>


        </div>


        `;


    });



}






/* ---------- Error ---------- */


function showError(){


    const box=

    document.getElementById(

        "dashboardError"

    );


    if(box){


        box.innerHTML=

        `

        ⚠️ ไม่สามารถโหลดข้อมูล Dashboard ได้

        กรุณาตรวจสอบไฟล์ JSON


        `;


    }


}
