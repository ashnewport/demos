"use strict";
// Boolean
var isThisVideoDone = false;
// Numbers
var myNumber = 4;
// text, string
var myName = 'Ash';
// Template strings
var greeting = 'Hello, ' + myName;
var greeting2 = "Hellow, " + myName;
// Arrays
var count = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
// If you don't know the type (watch out for using this! It's easy to use this a lot, but you'll miss out on type checking!)
var anything = 4;
anything = 'Some text';
anything = false;
// Returning nothing
function greeter(name) {
    console.log("Hello, " + name);
}
// Enums
var joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    // Move player to left
}
