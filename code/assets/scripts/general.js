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
let zidx = 0;

function movepopup(popup) {
    let obj = document.querySelector("." + popup);
    obj.addEventListener("mousedown", mousedown);


    function mousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        let prevX = e.clientX;
        let prevY = e.clientY;
        zidx = zidx + 1
        obj.style.zIndex = zidx;

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
}
movepopup("popup")

let popupcounter = 0
let tabcounter = 1

function createpin() {
    popupcounter = popupcounter + 1;
    const pin = document.createElement("div");
    pin.classList.add("popup", "popup" + popupcounter);
    document.getElementById("popups").appendChild(pin);
    let randomkaomoji = (["(×﹏×)", "(￢_￢;)", "(✿◠‿◠)", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "ᕕ( ᐛ )ᕗ", "(¬ ¬ )", "( Φ ω Φ )", "U・ᴥ・U", "／(≧ x ≦)＼", "／(˃ᆺ˂)＼", "( ˘ ɜ˘) ♬♪♫", "(^_^♪)", "(ˊ〇ˋ*)", "(`･Θ･´)", "／(^ × ^)＼"])[Math.floor(Math.random() * 14)];
    document.querySelector(".popup" + popupcounter).innerHTML = ('<div class="popheader"><button class="close" onclick="remove(this)"><i class="fa-solid fa-x"></i></button><div class="poptitle"><span class="input" role="textbox" contenteditable>' + "post-it " + tabcounter + "!" + '</span></div><button class="minimize" onclick="minimize(this)"><i class="fa-solid fa-window-minimize"></i></button></div><div class="poptextarea"><span class="input" role="textbox" contenteditable>' + randomkaomoji + '</span></div>');
    movepopup("popup" + popupcounter);
    tabcounter = tabcounter + 1;
}

function remove(el) {
    var child = el
    var parent = child.parentElement;
    var grandparent = parent.parentElement;
    let grandparentnumber = grandparent.className;
    grandparent.remove();
    if ((document.getElementById("toolbar").contains(".icon" + grandparentnumber.replaceAll(".popup"))) == True) {
        document.querySelector(".icon" + grandparentnumber.replaceAll(".popup"));
    };
}

function minimize(el) {
    var child = el;
    var parent = child.parentElement;
    var grandparent = parent.parentElement;
    grandparent.classList.add("minimized")
    const icon = document.createElement("button")
    icon.classList.add("icon", "icon" + popupcounter)
    document.getElementById("toolbar").appendChild(icon)
    document.querySelector(".icon" + popupcounter).innerHTML = ('<div class="' + popupcounter + '" onclick="deminimize(this)"><i class="fa-solid fa-thumbtack"></i>' + (tabcounter) + '</div>')
}

function deminimize(el) {
    if (el.className == 0) {
        document.querySelector(".popup").classList.remove("minimized");
        el.parentElement.remove();
    } else {
        document.querySelector(".popup" + (el.className)).classList.remove("minimized");
        el.parentElement.remove();
    }
}
let bgidx = 3;

function prevbg() {
    if (bgidx > 2 && bgidx <= 5) {
        bgidx = bgidx - 1
        document.getElementById("background").style.background = 'url("../assets/images/wallpaper' + bgidx + '.png")'
    }
}

function nextbg() {
    if (bgidx > 1 && bgidx <= 5) {
        bgidx = bgidx + 1
        document.getElementById("background").style.background = 'url("../assets/images/wallpaper' + bgidx + '.png")'
    }
}