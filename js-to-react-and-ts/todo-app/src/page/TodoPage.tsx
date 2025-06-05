import TodoCounter from "../components/TodoCounter";
import TodoInput from "../components/TodoInput";
import Todos from "../components/Todos";

export default function TodoPage() {
  return (
    <div>
      <TodoInput />
      {/* todo input */}
      <TodoCounter />
      {/* todo counter */}
      <Todos />
      {/* todo list  */}
    </div>
  );
}
