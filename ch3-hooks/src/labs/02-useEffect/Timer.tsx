import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
      console.log("Clean up!");
    };
  }, []);

  return (
    <div>
      <p>count : {count}</p>
    </div>
  );
}
