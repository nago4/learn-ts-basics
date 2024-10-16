// prac03.ts
import { getTodoStatus } from './todoUtils';
import { Todo } from './todo';

const testTodos: Todo[] = [
  { title: "基礎物理3の宿題", completed: true, dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24) }, // 完了、期限未来
  { title: "基礎物理3の宿題", completed: false, dueDate: new Date(Date.now() + 1000 * 60 * 60 * 3) }, // 未完了、期限3時間後
  { title: "基礎物理3の宿題", completed: false, dueDate: new Date(Date.now() - 1000 * 60 * 60 * 1) } // 未完了、期限1時間前
];

testTodos.forEach(todo => {
  console.log(getTodoStatus(todo));
});