let shorbor=[];



async function loadShorbor(){


const data =
await fetch(
"data/shorbor.json"
)

.then(r=>r.json());


shorbor=data.shorbor;


showShorbor(shorbor);


}





function showShorbor(list){


let html="";


list.forEach(s=>{


html+=`

<div class="shorbor-card">


<h3>
🛡️ ${s.name}
</h3>


<p>
ตำแหน่ง :
${s.position}
</p>


<p>
พื้นที่ :
${s.area}
</p>


<p>
สถานะ :
${s.status}
</p>


</div>


`;



});



document.getElementById(
"shorborList"
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
shorbor.filter(

s=>

s.name.includes(key)

);



showShorbor(result);



}

);





loadShorbor();
