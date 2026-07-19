let documents=[];



async function loadDocuments(){


documents =
await fetch(
"data/document.json"
)

.then(r=>r.json())

.then(data=>data.documents);



showDocuments(documents);


}





function showDocuments(list){


let html="";



list.forEach(doc=>{


html += `


<div class="document-card">


<h3>
📄 ${doc.title}
</h3>


<p>
ประเภท :
${doc.type}
</p>


<p>
วันที่ :
${doc.date}
</p>


<p>
สถานะ :
${doc.status}
</p>


</div>


`;



});



document.getElementById(
"documentList"
)
.innerHTML =
html;



}





document.getElementById(
"search"
)
.addEventListener(
"input",
function(){


let keyword =
this.value;



let result =
documents.filter(

d=>

d.title.includes(keyword)

);



showDocuments(result);



}

);





loadDocuments();
