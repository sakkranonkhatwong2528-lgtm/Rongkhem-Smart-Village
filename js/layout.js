async function include(id, file) {

    const res = await fetch(file);

    document.getElementById(id).innerHTML =
        await res.text();

}

window.onload = function(){

    include("header","components/header.html");

    include("sidebar","components/sidebar.html");

    include("footer","components/footer.html");

}
