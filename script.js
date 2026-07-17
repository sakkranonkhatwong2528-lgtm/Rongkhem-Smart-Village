fetch("data/news.json")

.then(response => response.json())

.then(data => {

let box = document.getElementById("news-list");

box.innerHTML="";


data.forEach(news => {


box.innerHTML += `

<div class="card">

<h3>${news.title}</h3>

<p>
📅 ${news.date}
</p>

<p>
${news.detail}
</p>

</div>

`;


});


})

.catch(error => {

document.getElementById("news-list").innerHTML =
"ไม่สามารถโหลดข่าวสารได้";

});
