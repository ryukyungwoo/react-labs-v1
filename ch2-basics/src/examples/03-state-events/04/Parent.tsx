import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <Child count={count} onIncrease={increase} />
    </div>
  );
}
