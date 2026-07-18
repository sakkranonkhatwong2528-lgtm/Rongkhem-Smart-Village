let leaders=[];


fetch("../data/leader.json")

.then(res=>res.json())

.then(data=>{

leaders=data;

showLeader();

summary();

});





function showLeader(){


let html="";


leaders.forEach(l=>{


html+=`

<div class="card">


<img 
src="../images/leaders/${l.image}"
width="120"
>


<h3>

${l.name}

</h3>


<p>

ตำแหน่ง :
${l.position}

</p>


<p>

ฝ่าย :
${l.department}

</p>


</div>


`;


});



document.getElementById(
"leader-list"
).innerHTML=html;


}





function summary(){


let total =
leaders.length;



document.getElementById(
"leader-summary"
).innerHTML=

`

👥 คณะทำงานทั้งหมด

<br>

${total}

คน

`;



}
