export {};
import { Todo } from "./types"; // 事前に正しく定義されていると仮定します
import { initTodos } from "./initTodos";

const today = new Date(2024, 9, 22); // 現在の日付を設定します
const overdueTodos: Todo[] = initTodos.filter(todo => {
  // Todoが未完了で、締め切りが今日より前であることを確認します
  return !todo.isDone && todo.deadline < today;
});

console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overdueTodos, null, 2));