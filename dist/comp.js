"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepEqual_1 = require("./utils/deepEqual"); // 追加
const todo1 = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
const todo2 = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
console.log(todo1 === todo2); // 浅い比較 false
console.log((0, deepEqual_1.deepEqual)(todo1, todo2)); // 深い比較 true
