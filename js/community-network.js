async function loadNetwork(){


const data =
await fetch(
"data/community-network.json"
)
.then(r=>r.json());



let html="";



data.groups.forEach(group=>{


html += `


<div class="network-card">


<div class="icon">

${group.icon}

</div>



<h3>

${group.name}

</h3>



<p>

${group.detail}

</p>



</div>


`;



});



document.getElementById(
"networkList"
)
.innerHTML =
html;



}



loadNetwork();
