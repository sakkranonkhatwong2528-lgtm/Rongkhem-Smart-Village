let elderly=[];



async function loadElderly(){


const data =
await fetch(
"data/elderly.json"
)

.then(r=>r.json());


elderly=data.elderly;


showElderly(elderly);


}




function showElderly(list){


let html="";


list.forEach(e=>{


html+=`

<div class="elderly-card">


<h3>
👴 ${e.name}
</h3>


<p>
อายุ :
${e.age} ปี
</p>


<p>
🏠 บ้านเลขที่ :
${e.house}
</p>


<p>
❤️ สุขภาพ :
${e.health}
</p>


<p>
🩺 การดูแล :
${e.care}
</p>


</div>


`;



});


document.getElementById(
"elderlyList"
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
elderly.filter(

e=>

e.name.includes(key)

);



showElderly(result);



}

);





loadElderly();
