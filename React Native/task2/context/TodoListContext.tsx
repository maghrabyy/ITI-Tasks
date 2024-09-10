import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { TodoItemType } from '../types/todoItemType';

type TodoListContextType = {
  todoList: TodoItemType[];
  setTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
};
const TodoListContext = createContext<TodoListContextType | null>(null);

export const useTodoList = () => {
  return useContext(TodoListContext) as TodoListContextType;
};

type TodoListProviderProps = {
  children: ReactNode;
};
export const TodoListProvider = ({ children }: TodoListProviderProps) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};
