// types.ts
export interface Todo {
  id: number; // uuid の型は string です
  name: string;
  isDone: boolean;
  priority: number;
  deadline?: Date; // 期限はオプションなので ? マークをつけます
}