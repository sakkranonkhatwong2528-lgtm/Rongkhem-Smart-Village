let news=[];



async function loadNews(){


const data =
await fetch(
"data/news.json"
)

.then(r=>r.json());


news=data.news;


showNews(news);


}






function showNews(list){


let html="";


list.forEach(n=>{


html+=`

<div class="news-card">


<h3>
📢 ${n.title}
</h3>


<p>
${n.detail}
</p>


<p>
ประเภท :
${n.type}
</p>


<p>
📅 ${n.date}
</p>


</div>


`;



});


document.getElementById(
"newsList"
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
news.filter(

n=>

n.title.includes(key)

);



showNews(result);


}

);





loadNews();
