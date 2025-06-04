import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function FetchData() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
      data.then((res) => res.json()).then((data) => setTodo(data));
    }, 1000);
  }, []);

  return (
    <div>
      {todo ? (
        <ul>
          <li>id: {todo?.id}</li>{" "}
          {/** 값이 없으면 값이 들어올 때 까지 실행하지 않음*/}
          <li>title: {todo?.title}</li>
        </ul>
      ) : (
        <p>loading ...</p>
      )}
    </div>
  );
}
