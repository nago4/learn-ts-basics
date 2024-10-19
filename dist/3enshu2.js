"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var priorities = [3, 1, 2, 1]; // 1〜3の値が格納された配列
// ここの処理を完成させる
var formattedPriorities = priorities.map(function (priorities) { return "★".repeat(4 - priorities); });
console.log(priorities);
console.log(formattedPriorities);
