fetch("../../data/project.json")

.then(response => {

    if (!response.ok) {
        throw new Error("ไม่พบข้อมูลโครงการ");
    }

    return response.json();

})

.then(data => {

    const container = document.querySelector(".project-grid");


    if (!container) {
        console.error("ไม่พบพื้นที่แสดงโครงการ");
        return;
    }


    container.innerHTML = "";


    data.forEach(project => {


        container.innerHTML += `

        <div class="card">


            <h2>
            ${project.icon} ${project.name}
            </h2>


            <p>
            <b>ประเภท :</b>
            ${project.type}
            </p>


            <p class="status">
            ${project.status}
            </p>


            <h3>
            ความคืบหน้า ${project.progress}%
            </h3>


            <div class="progress">

                <div class="bar"
                style="width:${project.progress}%">
                </div>

            </div>


            <p>
            ${project.detail}
            </p>


            <hr>


            <p>
            👤 ผู้รับผิดชอบ :
            ${project.owner}
            </p>


            <p>
            💰 งบประมาณ :
            ${project.budget || "-"}
            </p>


        </div>

        `;


    });


})


.catch(error => {

    console.error(error);

    const container = document.querySelector(".project-grid");

    if(container){

        container.innerHTML = `

        <div class="card">

        ❌ ไม่สามารถโหลดข้อมูลโครงการได้

        </div>

        `;

    }

});
