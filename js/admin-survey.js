async function loadAdminSurvey(){


const data =
await fetch(
"data/survey.json"
)
.then(r=>r.json());



document.getElementById("total").innerHTML =
data.total;


document.getElementById("elderly").innerHTML =
data.vulnerable.elderly;


document.getElementById("disabled").innerHTML =
data.vulnerable.disabled;


document.getElementById("burning").innerHTML =
data.environment.burning;



document.getElementById("t1").innerHTML =
data.total;


document.getElementById("t2").innerHTML =
data.gender.male;


document.getElementById("t3").innerHTML =
data.gender.female;


document.getElementById("t4").innerHTML =
data.vulnerable.elderly;


document.getElementById("t5").innerHTML =
data.vulnerable.disabled;



}




function printSurvey(){

window.print();

}



loadAdminSurvey();
