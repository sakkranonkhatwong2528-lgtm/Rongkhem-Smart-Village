let vulnerable=[];



async function loadVulnerable(){


const data =
await fetch(
"data/vulnerable.json"
)

.then(r=>r.json());


vulnerable=data.vulnerable;


showVulnerable(vulnerable);


}







function showVulnerable(list){


let html="";



list.forEach(v=>{


html+=`

<div class="vulnerable-card">


<h3>
❤️ ${v.name}
</h3>


<p>
อายุ :
${v.age} ปี
</p>


<p>
ประเภท :
${v.type}
</p>


<p>
🏠 บ้านเลขที่ :
${v.house}
</p>


<p>
🤝 การช่วยเหลือ :
${v.support}
</p>


<p>
ระดับ :
${v.level}
</p>


</div>


`;



});



document.getElementById(
"vulnerableList"
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
vulnerable.filter(

v=>

v.name.includes(key)

);



showVulnerable(result);


}

);





loadVulnerable();
