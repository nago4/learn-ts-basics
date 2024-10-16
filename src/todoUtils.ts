// todoUtils.ts
import { Todo } from './todo';

export const getTodoStatus = (todo: Todo): string => {
  const now = new Date();
  const dueTime = todo.dueDate.getTime();
  const currentTime = now.getTime();
  const remainingHours = Math.floor((dueTime - currentTime) / (1000 * 60 * 60));
  
  if (todo.completed) {
    return `【済】${todo.title}`;
  } else if (remainingHours > 0) {
    return `【未】${todo.title} (期限まで残り${remainingHours}時間)`;
  } else {
    return `【未】${todo.title} (期限を${Math.abs(remainingHours)}時間超過)`;
  }
};