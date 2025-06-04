import { useEffect, useState } from "react";

export default function CounterEffect() {
  const [count, setCount] = useState(0);

  function clickButton() {
    setCount((count) => count + 1);
  }
  useEffect(() => {
    console.log(`count is {${count}`);
  }, [count]);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={clickButton}>+</button>
    </div>
  );
}
