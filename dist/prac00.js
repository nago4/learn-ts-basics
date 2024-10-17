"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetAndCalculate(name, a, b) {
    var sum = a + b;
    return "Hello, ".concat(name, "! The sum of ").concat(a, " and ").concat(b, " is ").concat(sum, ".");
}
var userName = "Alice";
var x = 10;
var y = 20;
var result = greetAndCalculate(userName, x, y);
console.log(result);
