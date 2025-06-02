// input 요소 같은 사용자 입력을 받는 요소 값을
// 즉시 라이브로 반영하고 싶다면 ??

import { useState } from "react";

export default function LiveShowInput() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="입력..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <p>입력 : {text}</p>
    </>
  );
}
