import React, { useState } from "react";
interface Todo {
  id: number;
  text: string;
}
export default function TodoLIst() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [id, setId] = useState(0);

  const [input, setInput] = useState("");

  function addTodos() {
    setId(id + 1);

    const todo: Todo = {
      id: id,
      text: input,
    };

    setTodo([...todos, todo]);
    setInput("");
  }

  function deleteTodos(id: number) {
    setTodo(todos.filter((todo: Todo) => id !== todo.id));
  }

  function inInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <ul>
      <input placeholder="입력중" onChange={inInput} value={input} />
      <button onClick={addTodos}>추가</button>

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodos(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
