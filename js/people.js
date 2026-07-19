let citizens=[];



async function loadPeople(){


const data =
await fetch(
"data/citizen.json"
)
.then(r=>r.json());


citizens=data.citizens;


showPeople(citizens);


}




function showPeople(list){


let html="";


list.forEach(person=>{


html += `


<div class="people-card">


<h3>
👤 ${person.name}
</h3>


<p>
เพศ : ${person.gender}
</p>


<p>
อายุ : ${person.age} ปี
</p>


<p>
สถานะ : ${person.status}
</p>


<p>
สุขภาพ : ${person.health}
</p>


<p>
บ้านเลขที่ : ${person.house}
</p>


</div>


`;



});


document.getElementById(
"peopleList"
)
.innerHTML=html;


}







document.getElementById(
"search"
)
.addEventListener(
"input",

function(){


let keyword=this.value;


let result =
citizens.filter(

p=>

p.name.includes(keyword)

);



showPeople(result);



}

);




loadPeople();
