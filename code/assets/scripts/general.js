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

const obj = document.querySelector(".popup");
obj.addEventListener("mousedown", mousedown);

function mousedown(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;
        const rect = obj.getBoundingClientRect();
        obj.style.left = rect.left - newX + "px";
        obj.style.top = rect.top - newY + "px";
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
    }
}