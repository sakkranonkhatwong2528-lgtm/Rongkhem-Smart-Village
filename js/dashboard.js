fetch("data/news.json")

.then(response=>response.json())

.then(data=>{


let box=document.getElementById("newsList");


box.innerHTML="";


data.slice(0,5).forEach(news=>{


box.innerHTML += `

<div>

<h3>
${news.title}
</h3>

<p>
${news.detail}
</p>

<hr>

</div>


`;


});


})

.catch(()=>{


document.getElementById("newsList").innerHTML=

"ยังไม่มีข้อมูลข่าว";


});
