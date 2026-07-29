let leaders = [];


fetch("data/leaders.json")

.then(response => {

    if (!response.ok) {
        throw new Error("ไม่พบไฟล์ข้อมูลผู้นำ");
    }

    return response.json();

})


.then(data => {


    leaders = data.leaders || [];

    showLeader(leaders);


})


.catch(error => {


    document.getElementById("leaders").innerHTML =

    `
    <div class="card">

        <h3>โหลดข้อมูลไม่สำเร็จ</h3>

        <p>${error}</p>

    </div>
    `;


});



function showLeader(leaders){


let html = "";


leaders.forEach(person => {


html +=

`
<div class="leader-card">


<img src="${person.image}" 
alt="${person.name}">


<h3>
${person.name}
</h3>


<p>
${person.position}
</p>


</div>
`;


});



document.getElementById("leaders").innerHTML = html;


}
