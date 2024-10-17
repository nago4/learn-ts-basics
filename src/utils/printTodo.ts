import dayjs from "dayjs";
import { Todo } from "../types";

/*`export const printTodo = (todo: Todo): void => {
  const { name, priority, deadline } = todo; // 分割代入
  const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
  console.log(todoSummary);
};*/
export const printTodo = (todo: Todo) => {
  console.log(`タスク名: ${todo.name}`);
  console.log(`優先度: ${todo.priority}`);
  console.log(`完了: ${todo.isDone}`);
  console.log(`期限: ${todo.deadline}`);
};