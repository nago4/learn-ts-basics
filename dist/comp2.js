"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo1 = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
    id: 1
};
var todo2 = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
    id: 1
};
console.log(todo1 === todo2); // 比較結果は「false」
