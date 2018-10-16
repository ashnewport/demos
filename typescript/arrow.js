"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstName = 'Ash';
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.firstName);
        }, 500);
    };
    return Greeter;
}());
var greeter2 = new Greeter();
greeter2.sayHello();
