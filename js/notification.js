/*
==================================
Notification Center
Rongkhem Smart Village
==================================
*/


async function loadNotification(){


const data =
await fetch(
"data/notification.json"
)

.then(r=>r.json());



let html="";



data.notifications.forEach(n=>{


let level="";


if(n.priority=="สูง"){

level="high";

}



html += `


<div class="notification-card ${level}">


<h3>

${n.title}

</h3>


<p>

${n.detail}

</p>


<p>

📅 ${n.date}

</p>


<p>

ระดับ :
${n.priority}

</p>



</div>


`;



});




document.getElementById(
"notificationList"
)
.innerHTML=html;



}




loadNotification();
