"use strict";
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    console.log("Hello, " + firstName + " " + lastName);
}
greet('Ash', 'Newport');
