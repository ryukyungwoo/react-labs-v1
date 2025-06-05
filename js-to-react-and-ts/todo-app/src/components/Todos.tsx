import { useTodoStore } from "../store/TodoStore";
import Todo from "./Todo";

export default function Todos() {
  const list = useTodoStore((state) => state.list);

  return (
    <div>
      <ul>
        {list.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
