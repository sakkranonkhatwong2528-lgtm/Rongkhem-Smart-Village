fetch("../data/community.json")

.then(res=>res.json())

.then(data=>{


showCommunity(data);

showResource(data.resources);

showAchievement(data.achievement);


});





function showCommunity(c){


document.getElementById(
"community-info"
).innerHTML=

`

🏡 ${c.name}

<br>

📍 ${c.district}

<br><br>

📖 ประวัติ

<br>

${c.history}


<br><br>

🎯 วิสัยทัศน์

<br>

${c.vision}


<br><br>

👥 ประชากร :

${c.population}

คน


<br>

👴 ผู้สูงอายุ :

${c.elderly}

คน


`;



}






function showResource(data){


let html="";


data.forEach(r=>{


html+=`

<p>
🌿 ${r}
</p>

`;


});


document.getElementById(
"resource-list"
).innerHTML=html;


}





function showAchievement(data){


let html="";


data.forEach(a=>{


html+=`

<p>
🏆 ${a}
</p>

`;


});


document.getElementById(
"achievement-list"
).innerHTML=html;


}
