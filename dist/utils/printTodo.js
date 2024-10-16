"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTodo = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const printTodo = (todo) => {
    const { name, priority, deadline } = todo; // 分割代入
    const todoSummary = `(優先度: ${priority}) ${name}` +
        ` 期日: ${(0, dayjs_1.default)(deadline).format("YYYY/MM/DD HH:mm")}`;
    console.log(todoSummary);
};
exports.printTodo = printTodo;
