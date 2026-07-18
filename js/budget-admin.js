let budgets=[];


fetch("../data/budget.json")

.then(res=>res.json())

.then(data=>{

budgets=data;

showBudget();

summary();


});





function showBudget(){


let html="";


budgets.forEach(b=>{


html+=`

<tr>


<td>

${b.type}

</td>


<td>

${b.detail}

</td>


<td>

${b.category}

</td>


<td>

${b.amount.toLocaleString()}
บาท

</td>


<td>

${b.date}

</td>


</tr>


`;


});


document.getElementById(
"budget-table"
).innerHTML=html;


}





function summary(){


let income =
budgets
.filter(
x=>x.type=="รายรับ"
)
.reduce(
(a,b)=>a+b.amount,0
);



let expense =
budgets
.filter(
x=>x.type=="รายจ่าย"
)
.reduce(
(a,b)=>a+b.amount,0
);



let balance =
income-expense;



document.getElementById(
"budget-summary"
).innerHTML=

`

🟢 รายรับ :
${income.toLocaleString()}
บาท

<br><br>

🔴 รายจ่าย :
${expense.toLocaleString()}
บาท

<br><br>

💰 เงินคงเหลือ :
${balance.toLocaleString()}
บาท

`;



}
