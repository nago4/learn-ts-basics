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
var dayjs_1 = require("dayjs");
var initTodos_1 = require("./initTodos");
var dtFmt = "YYYY/MM/DD HH:mm";
var deleteTodoById = function (todos, id) {
    if (!Number.isInteger(id) || id < 0) {
        return todos;
    }
    return todos.filter(function (todo) { return todo.id !== id; });
};
var stringifyTodos = function (todos) {
    return todos.map(function (todo) {
        return "id=".concat(todo.id, " ").concat(todo.name, " ") +
            "\u671F\u9650 ".concat((0, dayjs_1.default)(todo.deadline).format(dtFmt));
    });
};
var todo = __spreadArray([], initTodos_1.initTodos, true);
var updatedTodos = deleteTodoById(todo, 2);
console.log("Before:", stringifyTodos(todo));
console.log("After:", stringifyTodos(updatedTodos));
