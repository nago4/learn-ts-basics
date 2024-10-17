export {};
import { Todo } from "./types";

const todo1: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
  id: 1
};

const todo2: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
  id: 1
};

console.log(todo1 === todo2); // 比較結果は「false」