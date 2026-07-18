let news=[];


fetch("../data/news.json")

.then(res=>res.json())

.then(data=>{


news=data;


showNews();

summary();


});





function showNews(){


let html="";


news.forEach(n=>{


html+=`

<div class="card">


<img

src="../images/news/${n.image}"

width="200">


<h3>

${n.title}

</h3>


<p>

ประเภท:

${n.category}

</p>


<p>

วันที่:

${n.date}

</p>


<p>

${n.detail}

</p>


<p>

👁 ${n.views} ครั้ง

</p>


</div>


`;



});


document.getElementById(
"news-list"
).innerHTML=html;


}





function summary(){


let total =
news.length;


let views =
news.reduce(
(a,b)=>a+b.views,
0
);



document.getElementById(
"news-summary"
).innerHTML=

`

📰 ข่าวทั้งหมด :

${total}

ข่าว


<br>


👁 ผู้เข้าชมรวม :

${views}

ครั้ง


`;



}
