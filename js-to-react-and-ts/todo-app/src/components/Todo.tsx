import { useTodoStore, type TodoType } from "../store/TodoStore";

interface TodoProps {
  todo: TodoType;
}

export default function Todo({ todo }: TodoProps) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span>{todo.content}</span>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
}
