let news=[];



fetch("../data/news.json")

.then(res=>res.json())

.then(data=>{

news=data;

showNews();

});





function showNews(){


let box=document.getElementById("newsBox");


box.innerHTML="";


news.forEach((item,index)=>{


box.innerHTML +=`

<div class="news-item">

<h3>
${item.title}
</h3>


<p>
${item.detail}
</p>


<button onclick="deleteNews(${index})">

ลบ

</button>


</div>

`;


});


}




function addNews(){


let title=document.getElementById("title").value;

let detail=document.getElementById("detail").value;



if(title=="" || detail==""){

alert("กรุณากรอกข้อมูล");

return;

}



news.unshift({

title:title,

detail:detail

});


showNews();



document.getElementById("title").value="";

document.getElementById("detail").value="";


alert("เพิ่มข่าวแล้ว");


}




function deleteNews(index){


news.splice(index,1);

showNews();


}
