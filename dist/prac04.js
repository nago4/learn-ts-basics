"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
// Reactの状態管理に適した
// todo とは参照は異なる updatedTodo を生成
var updatedTodo = {
    name: "COBOLの勉強をする", // 変更
    priority: 3, // 変更
    isDone: todo.isDone, // todo の値を引き継ぐ
    deadline: todo.deadline, // todo の値を引き継ぐ
};
// todo と updatedTodo のtodo の値を参照が「異なること」を確認
console.log(todo !== updatedTodo); // true であれば OK
