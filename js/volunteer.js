let volunteers=[];



async function loadVolunteer(){


const data =
await fetch(
"data/volunteer.json"
)

.then(r=>r.json());


volunteers=data.volunteers;


showVolunteer(volunteers);


}







function showVolunteer(list){


let html="";



list.forEach(v=>{


html+=`

<div class="volunteer-card">


<h3>
🩺 ${v.name}
</h3>


<p>
ตำแหน่ง :
${v.position}
</p>


<p>
พื้นที่ :
${v.area}
</p>


<p>
👥 ดูแลประชาชน :
${v.care} คน
</p>


</div>


`;



});



document.getElementById(
"volunteerList"
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
volunteers.filter(

v=>

v.name.includes(key)

);



showVolunteer(result);


}

);





loadVolunteer();
