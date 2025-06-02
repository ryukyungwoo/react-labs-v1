import { useState } from "react";

// 클릭 시 +1 증가하는 버튼을 만들 때
export default function Counter() {
  // let count = 0;

  // count : 상태변수
  // setCount : count의 값을 바꿀 때 사용
  // 선언적 방식
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function upCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={upCount}>+ 1</button>
      <p>현재값 : {count}</p>
      <button onClick={() => setText(text + "A")}> A 추가</button>
      <p>현재값 : {text}</p>
    </div>
  );
}
