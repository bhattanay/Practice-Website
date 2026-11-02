function clicked() {
    document.title = document.getElementById("txtbx").value
}

function increaseLoc() {
    localStorage.setItem("val", JSON.parse(document.getElementById("loc").innerText) + 1);
    document.getElementById("loc").innerText = JSON.parse(document.getElementById("loc").innerText) + 1;
}

function increaseSes() {
    sessionStorage.setItem("val", JSON.parse(document.getElementById("ses").innerText) + 1);
    document.getElementById("ses").innerText = JSON.parse(document.getElementById("ses").innerText) + 1;
}

function loading() {
    if (localStorage.getItem("val")) {
        document.getElementById("loc").innerText = JSON.stringify(JSON.parse(localStorage.getItem("val")))
    }

    if (sessionStorage.getItem("val")) {
        document.getElementById("ses").innerText = JSON.stringify(JSON.parse(sessionStorage.getItem("val")))
    }

}