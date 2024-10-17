"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTodo = void 0;
// utils/printTodo.ts
const printTodo = (todo) => {
    console.log(`タスク名: ${todo.name}`);
    console.log(`優先度: ${todo.priority}`);
    console.log(`完了: ${todo.isDone}`);
    console.log(`期限: ${todo.deadline}`);
};
exports.printTodo = printTodo;
const printTodo_1 = require("./utils/printTodo");
const assert_1 = __importDefault(require("assert"));
const todo = {
    name: "Learn TypeScript",
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
// イミュータブルなオブジェクト更新
const updatedTodo = Object.assign(Object.assign({}, todo), { deadline: new Date(2024, 9, 30), isDone: true });
// todo と updatedTodo の参照が「異なること」を念のために確認
assert_1.default.notEqual(todo, updatedTodo);
// updatedTodo の内容を確認
(0, exports.printTodo)(updatedTodo);
