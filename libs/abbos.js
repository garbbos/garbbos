var Abbos = (function () {
    'use strict';

    function MyDiv(element) {
        this.element = document.getElementById(element);
        this.on = function() {
            this.element.style.opacity = "1";
        };
        this.off = function() {
            this.element.style.opacity = "0";
        };
    }

    var newIssue = function () {
        log("newIssue...");
        toggle(popupNew);
    };

    return {
        MyDiv: MyDiv
    };
}());
