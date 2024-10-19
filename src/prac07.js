"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var initTodos_1 = require("./initTodos");
var targetId = 3;
var newName = "電気電子回路1の課題";
var updatedTodos = initTodos_1.initTodos.map(function (todo) {
    return todo.id === targetId ? __assign(__assign({}, todo), { name: newName }) : todo;
});
console.log(JSON.stringify(updatedTodos, null, 2));
