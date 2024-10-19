"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var initTodos_1 = require("./initTodos");
var dayjs_1 = __importDefault(require("dayjs"));
var dtFmt = "YYYY/MM/DD HH:mm";
var formattedTodos = initTodos_1.initTodos.map(function (t) {
    var str = "<li>[".concat(t.id, "] ").concat(t.name, " \u512A\u5148\u5EA6").concat(t.priority, " ") +
        "(\u671F\u9650".concat((0, dayjs_1.default)(t.deadline).format(dtFmt), ")") +
        (t.isDone ? "【済】" : "") +
        "</li>";
    return str;
});
console.log(formattedTodos);
