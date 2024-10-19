"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var initTodos_1 = require("./initTodos");
var sortedTodos = __spreadArray([], initTodos_1.initTodos, true).sort(function (a, b) {
    return b.priority - a.priority; // 降順（大きい順）に並べ替え
});
console.log(JSON.stringify(initTodos_1.initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));
