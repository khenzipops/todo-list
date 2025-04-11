//todo.tpys.ts

export interface Todo {
  length: string;
  id: number;
  text: string;
  completed: boolean;
  status: "todo" | "in-progress" | "done";
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
  onUpdateStatus: (
    id: number,
    newStatus: "todo" | "inProgress" | "done"
  ) => void;
}
