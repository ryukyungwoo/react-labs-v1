import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function plusClick() {
    setCount(count + 1);
  }

  function minusClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <span>
        <button onClick={plusClick}>+1</button> <p>{count}</p>
        <button onClick={minusClick}>-1</button>
      </span>
    </div>
  );
}
