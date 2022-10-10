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

let popupcounter = 1
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
    grandparent.remove();
    tabcounter = tabcounter - 1;
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
let bg3d = 0;

function toggle3d() {
    if (bg3d == 0) {
        document.getElementById("background").innerHTML(' <div class="sketchfab-embed-wrapper"> <iframe title="Smol Ame in an Upcycled Terrarium [HololiveEn]" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewportexecution-while-not-rendered web-share width="1900" height="1080" src="https://sketchfab.com/models/490cecc249d242188fda5ad3160a4b24/embed?camera=0&ui_theme=dark"> </iframe> </div>')
    } else {
        document.getElementById("background").style.innerHTML("")
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