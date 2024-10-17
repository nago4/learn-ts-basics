"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTodos = void 0;
var uuid_1 = require("uuid");
exports.initTodos = [
    {
        id: (0, uuid_1.v4)(),
        name: "Reactの勉強 (予習)",
        isDone: false,
        priority: 3,
        deadline: undefined,
    },
    {
        id: (0, uuid_1.v4)(),
        name: "TypeScriptの勉強 (復習)",
        isDone: true,
        priority: 2,
        deadline: undefined,
    },
    {
        id: (0, uuid_1.v4)(),
        name: "基礎物理学3の宿題",
        isDone: false,
        priority: 1,
        deadline: new Date(2024, 10, 11),
    },
    {
        id: (0, uuid_1.v4)(),
        name: "解析2の宿題",
        isDone: true,
        priority: 1,
        deadline: new Date(2024, 10, 16, 17),
    },
];
