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
movepopup("popuptodo")
let popupcounter = 0
let tabcounter = 1

function createpin() {
    if (tabcounter < 8) {
        popupcounter = popupcounter + 1;
        const pin = document.createElement("div");
        pin.classList.add("popup", "popup" + popupcounter);
        document.getElementById("popups").appendChild(pin);
        let randomkaomoji = (["(×﹏×)", "(￢_￢;)", "(✿◠‿◠)", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "ᕕ( ᐛ )ᕗ", "(¬ ¬ )", "( Φ ω Φ )", "U・ᴥ・U", "／(≧ x ≦)＼", "／(˃ᆺ˂)＼", "( ˘ ɜ˘) ♬♪♫", "(^_^♪)", "(ˊ〇ˋ*)", "(`･Θ･´)", "／(^ × ^)＼"])[Math.floor(Math.random() * 14)];
        document.querySelector(".popup" + popupcounter).innerHTML = ('<div class="popheader"><button class="close" onclick="remove(this)"><i class="fa-solid fa-x"></i></button><div class="poptitle"><span class="input" role="textbox" contenteditable>' + "post-it " + tabcounter + "!" + '</span></div><button class="minimize" onclick="minimize(this)"><i class="fa-solid fa-window-minimize"></i></button></div><div class="poptextarea"><span class="input" role="textbox" contenteditable>' + randomkaomoji + '</span></div>');
        movepopup("popup" + popupcounter);
        tabcounter = tabcounter + 1;
    }
}

function remove(el) {
    var child = el
    var parent = child.parentElement;
    var grandparent = parent.parentElement;
    let grandparentnumber = grandparent.className;
    tabcounter = tabcounter - 1
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
let bgidx = 2;
let mdltoggle = 0;

function prevbg() {
    if (bgidx > 2 && bgidx <= 7) {
        bgidx = bgidx - 1
        document.getElementById("background").style.background = 'url("../assets/images/wallpaper' + bgidx + '.png")';
        document.getElementById("background").innerHTML = "";
        mdltoggle = 0;
    }
}

function nextbg() {
    if (bgidx > 1 && bgidx <= 6) {
        bgidx = bgidx + 1
        document.getElementById("background").style.background = 'url("../assets/images/wallpaper' + bgidx + '.png")';
        document.getElementById("background").innerHTML = "";
        mdltoggle = 0;
    }
}
const array3d = [
    '',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="Cube World" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c54ea3927b854b76b531993daa793f2e/embed?camera=0">"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="The Kelp Collector" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-sharesrc="https://sketchfab.com/models/69752236169941bb8226af28933e1aa4/embed?camera=0">"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="la bagarreuse by Clement Deruyter" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d3aee3b319ec4ab7bed42f63466fef8b/embed?camera=0">"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="Pixel Canals - Low Poly Game Level" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0e7cd01efb484aff817e3b03425cc080/embed?camera=0">"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="The Look (concept by Avogado6)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4a34d7e8b3044123ac3ff0c67e9f706d/embed?autostart=1&camera=0&ui_theme=dark"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="Pixel Canals - Low Poly Game Level" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0e7cd01efb484aff817e3b03425cc080/embed?camera=0">"> </iframe> </div>',
    '<div class="sketchfab-embed-wrapper"> <iframe id="bg" title="Book Cover" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c370f7e06e3c4b55ac35cf48008c77ff/embed"> </iframe> </div>'
];

function toggle3d() {
    if (mdltoggle == 0) {
        document.getElementById("background").innerHTML = array3d[bgidx];
        mdltoggle = 1;
    } else {
        document.getElementById("background").innerHTML = "";
        mdltoggle = 0;
    }
}

function musicminimize() {
    document.getElementById("musicplayer").classList.add("musicminimized");
    document.getElementById("musicicon").classList.remove("musicminimized");
}

function openmusic() {
    document.getElementById("musicplayer").classList.remove("musicminimized");
    document.getElementById("musicicon").classList.add("musicminimized");
}

function retract() {
    document.getElementById("navbar").classList.add("musicminimized");
    document.getElementById("detract").classList.remove("musicminimized");
    document.getElementById("bg").style.marginTop = "0em"
    document.getElementById("wallpaperswap").style.top = "0em"
    document.getElementById("bg").style.height = "100vh"
}

function detract() {
    document.getElementById("navbar").classList.remove("musicminimized");
    document.getElementById("detract").classList.add("musicminimized");
    document.getElementById("wallpaperswap").style.top = "10vh"
    document.getElementById("bg").style.marginTop = "10vh"
    document.getElementById("bg").style.height = "90vh"
}

function opentodo() {
    document.getElementById("todo").classList.remove("musicminimized");
    document.getElementById("opentodo").classList.add("musicminimized");
}

function minimizetodo() {
    document.getElementById("todo").classList.add("musicminimized");
    document.getElementById("opentodo").classList.remove("musicminimized");
}
let taskcounter = 1

function addtask() {
    const newtask = document.createElement("div");
    newtask.classList.add("task");
    newtask.innerHTML = '<div class="task"><input type="checkbox"><span class="input" role="textbox" contenteditable> Task' + taskcounter + '</span><button onclick="removetask(this)"><i class="fa-solid fa-minus"></i></button></div>';
    document.getElementById("todo").appendChild(newtask);
    taskcounter = taskcounter + 1;
}

function removetask(el) {
    el.parentElement.remove();
}