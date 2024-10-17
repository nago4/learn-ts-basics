"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// prac03.ts
var todoUtils_1 = require("./todoUtils");
var testTodos = [
    { title: "基礎物理3の宿題", completed: true, dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24) }, // 完了、期限未来
    { title: "基礎物理3の宿題", completed: false, dueDate: new Date(Date.now() + 1000 * 60 * 60 * 3) }, // 未完了、期限3時間後
    { title: "基礎物理3の宿題", completed: false, dueDate: new Date(Date.now() - 1000 * 60 * 60 * 1) } // 未完了、期限1時間前
];
testTodos.forEach(function (todo) {
    console.log((0, todoUtils_1.getTodoStatus)(todo));
});
