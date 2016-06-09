var write = document.getElementById("write"), close = document.getElementById("btn_close"), nuevo = new Abbos.MyDiv("popup");

function log(msg) {
    if (msg) {
        window.console.log(msg);
    }
}

function events() {
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            nuevo.hide(true);
            back.hide(true);
            log("Event 27 - Escape -");
        }
    };
    close.onclick = function() {
        nuevo.off();
    };
    write.onclick = function() {


        nuevo.on();
    };
}

window.onload = function() {

    //To detect escape button

    events();

    log("Window.load()");
};
