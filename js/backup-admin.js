let files=[

"citizen",

"household",

"health",

"elderly",

"vulnerable",

"complaint",

"project",

"wetland",

"activity",

"leader",

"oporor"

];





document.getElementById(
"backup-summary"
).innerHTML=

`

📁 ฐานข้อมูลทั้งหมด

<br>

${files.length}

ชุดข้อมูล

<br><br>

ระบบพร้อมสำรองข้อมูล

`;






function backupData(){


let backup={};


let count=0;



files.forEach(file=>{


fetch("../data/"+file+".json")

.then(res=>res.json())

.then(data=>{


backup[file]=data;

count++;



if(count==files.length){


downloadBackup(backup);


}



});


});



}






function downloadBackup(data){


let json =

JSON.stringify(
data,
null,
2
);



let blob =
new Blob(
[json],
{
type:"application/json"
}
);



let url =
URL.createObjectURL(blob);



let a =
document.createElement(
"a"
);



a.href=url;


a.download=
"Rongkhem-Smart-Village-Backup.json";



a.click();



}
