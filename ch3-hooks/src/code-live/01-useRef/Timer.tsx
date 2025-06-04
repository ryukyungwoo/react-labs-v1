import { useRef, useState } from "react";

export default function Timer() {
  //   const [timerId, setTimerId] = useState(0); 랜더링되지 않는 변수이기 때문에 useRef를 쓰는게 더 좋음
  const timerId = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  function start() {
    timerId.current = setInterval(() => {
      console.log("start");
      //   setCount(count + 1) 클로저 동작 때문에 초기값 0만 기억 하고 있어 1이상 안올라감
      setCount((count) => count + 1);
    }, 1000);
  }
  function stop() {
    if (timerId.current) clearInterval(timerId.current);
  }

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
