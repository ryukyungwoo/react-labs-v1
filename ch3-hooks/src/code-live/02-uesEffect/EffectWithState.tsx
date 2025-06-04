import { useEffect, useState } from "react";

export default function EffectWithState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(count);
    console.log(count2);
  }, [count, count2]);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
      <button onClick={() => setCount2((count) => count + 1)}>+2</button>
    </div>
  );
}
