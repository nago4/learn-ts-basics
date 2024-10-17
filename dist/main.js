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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var printTodo_1 = require("./utils/printTodo");
var assert_1 = __importDefault(require("assert"));
var todo = {
    name: "Learn TypeScript",
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
// イミュータブルなオブジェクト更新
var updatedTodo = __assign(__assign({}, todo), { deadline: new Date(2024, 9, 30), isDone: true });
// todo と updatedTodo の参照が「異なること」を念のために確認
assert_1.default.notEqual(todo, updatedTodo);
// updatedTodo の内容を確認
(0, printTodo_1.printTodo)(updatedTodo);
