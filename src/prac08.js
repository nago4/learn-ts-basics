"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initTodos_1 = require("./initTodos");
var today = new Date(2024, 9, 22); // 現在の日付を設定します
var overdueTodos = initTodos_1.initTodos.filter(function (todo) {
    // Todoが未完了で、締め切りが今日より前であることを確認します
    return !todo.isDone && todo.deadline < today;
});
console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overdueTodos, null, 2));
