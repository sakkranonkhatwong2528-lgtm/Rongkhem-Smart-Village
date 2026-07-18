fetch("../../data/project.json")
.then(response => response.json())
.then(data => {

const container = document.querySelector(".project-grid");

container.innerHTML="";

data.forEach(project=>{

container.innerHTML += `

<div class="card">

<h2>
${project.icon} ${project.name}
</h2>

<p>
ประเภท : ${project.type}
</p>

<p class="status">
${project.status}
</p>

<h3>
ความคืบหน้า ${project.progress}%
</h3>

<div class="progress">

<div class="bar" style="width:${project.progress}%"></div>

</div>

<p>
${project.detail}
</p>

<hr>

<p>
ผู้รับผิดชอบ : ${project.owner}
</p>

</div>

`;

});

});
