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

<tr>


<td>
${n.title}
</td>


<td>
${n.category}
</td>


<td>
${n.detail}
</td>


<td>
${n.date}
</td>


<td>

<select onchange="changeStatus(${n.id},this.value)">


<option ${n.status=="เผยแพร่"?"selected":""}>
เผยแพร่
</option>


<option ${n.status=="ซ่อน"?"selected":""}>
ซ่อน
</option>


</select>


</td>



<td>

<button onclick="viewNews(${n.id})">

ดู

</button>


</td>



</tr>

`;

});


document.getElementById(
"news-table"
).innerHTML=html;


}





function changeStatus(id,status){


let item =
news.find(
x=>x.id==id
);


item.status=status;


summary();


}





function summary(){


let total=news.length;


let publish =
news.filter(
x=>x.status=="เผยแพร่"
).length;



document.getElementById(
"news-summary"
).innerHTML=

`

📰 ข่าวทั้งหมด :
${total}

<br>

🟢 เผยแพร่ :
${publish}

`;



}





function viewNews(id){


let n =
news.find(
x=>x.id==id
);


alert(

`
หัวข้อ:
${n.title}

รายละเอียด:
${n.detail}

วันที่:
${n.date}

`

);


}
