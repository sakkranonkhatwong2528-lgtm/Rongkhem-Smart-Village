async function loadDashboard(){

    const people =
        await API.load("citizen.json");

    const household =
        await API.load("household.json");

    const elderly =
        await API.load("elderly.json");

    const news =
        await API.load("news.json");

    document.getElementById("people").textContent =
        people.length;

    document.getElementById("household").textContent =
        household.length;

    document.getElementById("elderly").textContent =
        elderly.length;

    document.getElementById("news").textContent =
        news.length;

}

loadDashboard();
