import { useTodoStore } from "../store/TodoStore";

export default function TodoCounter() {
  const list = useTodoStore((state) => state.list);

  return (
    <div>
      <p>counter : {list.length}</p>
    </div>
  );
}
