import { useState } from "react";
import { useTodoStore } from "../store/TodoStore";

export default function TodoInput() {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [input, setInput] = useState("");

  function addBtn() {
    addTodo(input);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="todo input ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addBtn}></button>
    </div>
  );
}
