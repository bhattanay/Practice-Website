function clicked() {
    if (document.getElementById("txtbx").value)
    document.title = document.getElementById("txtbx").value
}

function increaseLoc() {
    localStorage.setItem("val", JSON.parse(document.getElementById("loc").innerText) + 1)
    document.getElementById("loc").innerText = JSON.parse(document.getElementById("loc").innerText) + 1
}

function increaseSes() {
    localStorage.setItem("val", JSON.parse(document.getElementById("ses").innerText) + 1)
    document.getElementById("ses").innerText = JSON.parse(document.getElementById("ses").innerText) + 1

}

function loading() {
    if (localStorage.getitem("val")) {
        document.getElementById("loc").innerText = JSON.stringify(JSON.parse(localStorage.getitem("val")))
    }

    if (sessionStorage.getitem("val")) {
        document.getElementById("ses").innerText = JSON.stringify(JSON.parse(sessionStorage.getitem("val")))
    }

}