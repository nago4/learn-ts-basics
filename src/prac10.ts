export {};
import dayjs from "dayjs";
import { Todo } from "./types";
import { initTodos } from "./initTodos";
const dtFmt = "YYYY/MM/DD HH:mm";

const deleteTodoById = (todos: Todo[], id: number): Todo[] => {
  if (!Number.isInteger(id) || id < 0) {
    return todos;
  }
  return todos.filter((todo) => todo.id !== id);
};

const stringifyTodos = (todos: Todo[]): string[] =>
  todos.map(
    (todo) =>
      `id=${todo.id} ${todo.name} ` +
      `期限 ${dayjs(todo.deadline).format(dtFmt)}`
  );

const todo = [...initTodos];
const updatedTodos = deleteTodoById(todo, 2);

console.log("Before:", stringifyTodos(todo));
console.log("After:", stringifyTodos(updatedTodos));