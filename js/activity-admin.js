let aiData=[];



fetch("../data/ai-command.json")

.then(res=>res.json())

.then(data=>{

aiData=data;

});





function askAI(){


let q =
document.getElementById(
"question"
).value;



let result =
"ไม่พบข้อมูล";



aiData.forEach(a=>{


if(
q.includes(
a.question.substring(0,5)
)
){

result=a.answer;

}


});



document.getElementById(
"answer"
).innerHTML=

`

🤖 AI:

<br>

${result}

`;



}
