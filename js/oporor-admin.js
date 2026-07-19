let oporor=[];



async function loadOporor(){


const data =
await fetch(
"data/oporor.json"
)

.then(r=>r.json());


oporor=data.oporor;


showOporor(oporor);


}






function showOporor(list){


let html="";


list.forEach(o=>{


html+=`

<div class="oporor-card">


<h3>
🚨 ${o.name}
</h3>


<p>
ตำแหน่ง :
${o.position}
</p>


<p>
ความสามารถ :
${o.skill}
</p>


<p>
พื้นที่ :
${o.area}
</p>


<p>
สถานะ :
${o.status}
</p>


</div>


`;



});



document.getElementById(
"opororList"
)
.innerHTML=html;


}







document.getElementById(
"search"
)
.addEventListener(
"input",

function(){


let key=this.value;


let result =
oporor.filter(

o=>

o.name.includes(key)

);



showOporor(result);


}

);





loadOporor();
