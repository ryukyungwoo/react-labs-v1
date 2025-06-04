import { useEffect, useState } from "react";

export default function IntervalCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>{seconds} seconds</p>
    </div>
  );
}
