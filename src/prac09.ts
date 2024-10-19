export {};
import { initTodos } from "./initTodos";

const sortedTodos = [...initTodos].sort((a, b) => {
    return b.priority - a.priority; // 降順（大きい順）に並べ替え
  });
console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));