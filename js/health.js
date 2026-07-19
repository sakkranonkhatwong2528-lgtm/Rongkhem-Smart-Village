let health=[];



async function loadHealth(){


const data =
await fetch(
"data/health.json"
)

.then(r=>r.json());


health=data.health;


showHealth(health);


}






function showHealth(list){


let html="";


list.forEach(h=>{


html+=`

<div class="health-card">


<h3>
🩺 ${h.name}
</h3>


<p>
อายุ :
${h.age} ปี
</p>


<p>
🏠 บ้านเลขที่ :
${h.house}
</p>


<p>
โรคประจำตัว :
${h.disease}
</p>


<p>
สถานะ :
${h.status}
</p>


<p>
👩‍⚕️ อสม. :
${h.volunteer}
</p>


</div>


`;



});



document.getElementById(
"healthList"
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
health.filter(

h=>

h.name.includes(key)

);



showHealth(result);



}

);





loadHealth();
