let households=[];



async function loadHouse(){


const data =
await fetch(
"data/household.json"
)

.then(r=>r.json());



households =
data.households;


showHouse(households);


}







function showHouse(list){


let html="";



list.forEach(h=>{


html+=`

<div class="house-card">


<h3>
🏠 บ้านเลขที่ ${h.houseNo}
</h3>


<p>
👤 เจ้าบ้าน :
${h.owner}
</p>


<p>
👨‍👩‍👧 สมาชิก :
${h.members} คน
</p>


<p>
👴 ผู้สูงอายุ :
${h.elderly} คน
</p>


<p>
❤️ กลุ่มเปราะบาง :
${h.vulnerable} คน
</p>


<p>
📍 ${h.address}
</p>


</div>


`;



});



document.getElementById(
"houseList"
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
households.filter(

h=>

h.houseNo.includes(key)
||
h.owner.includes(key)

);



showHouse(result);



}

);





loadHouse();
