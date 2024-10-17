"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTodo = void 0;
/*`export const printTodo = (todo: Todo): void => {
  const { name, priority, deadline } = todo; // 分割代入
  const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
  console.log(todoSummary);
};*/
var printTodo = function (todo) {
    console.log("\u30BF\u30B9\u30AF\u540D: ".concat(todo.name));
    console.log("\u512A\u5148\u5EA6: ".concat(todo.priority));
    console.log("\u5B8C\u4E86: ".concat(todo.isDone));
    console.log("\u671F\u9650: ".concat(todo.deadline));
};
exports.printTodo = printTodo;
