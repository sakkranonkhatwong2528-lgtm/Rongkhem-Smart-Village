let news=[];



async function loadAdminNews(){


const data =
await fetch(
"data/news.json"
)

.then(r=>r.json());


news=data.news;


showTable();


}





function showTable(){


let html="";


news.forEach((n,i)=>{


html+=`

<tr>

<td>
${n.title}
</td>


<td>
${n.type}
</td>


<td>
${n.date}
</td>


<td>


<button onclick="deleteNews(${i})">

ลบ

</button>


</td>


</tr>


`;



});


document.getElementById(
"newsTable"
)
.innerHTML=html;


}







function addNews(){



let data={


id:Date.now(),


title:
document.getElementById("title").value,


detail:
document.getElementById("detail").value,


type:
document.getElementById("type").value,


date:
document.getElementById("date").value



};



news.unshift(data);



showTable();



alert(
"เพิ่มข่าวแล้ว"
);



}







function deleteNews(i){


if(confirm("ลบข่าวนี้หรือไม่")){


news.splice(i,1);


showTable();


}


}





loadAdminNews();
