/*
Rongkhem Smart Notification
*/


async function loadNotification(){



const res = await fetch(

"data/notification.json"

);



const data = await res.json();



const box =

document.getElementById(

"notificationList"

);



box.innerHTML="";





data.notifications.forEach(item=>{



box.innerHTML += `


<div class="dashboard-card">


<h3>

🔔 ${item.title}

</h3>


<p>

ประเภท : ${item.type}

</p>


<p>

วันที่ : ${item.date}

</p>


<p>

${item.message}

</p>


</div>


`;


});



}



document.addEventListener(

"DOMContentLoaded",

loadNotification

);
