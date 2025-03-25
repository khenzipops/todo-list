export interface Todo {
  id: string | number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}
