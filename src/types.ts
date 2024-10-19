export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
  priority: number;
  deadline: Date; // ここが重要です
}