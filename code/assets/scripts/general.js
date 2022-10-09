let dmtoggle = 0

function toggledarkmode() {
    if (dmtoggle == 0) {
        dmtoggle = 1
        document.body.style.color = "white";
        document.getElementById("darkmode").innerHTML = ('<i class="fa-regular fa-sun"></i>')
    } else {
        dmtoggle = 0
        document.body.style.color = "black";
        document.getElementById("darkmode").innerHTML = ('<i class="fa-solid fa-sun"></i>')
    }
}