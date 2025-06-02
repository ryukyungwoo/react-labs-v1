import { useState } from "react";

export default function LiveShowInput() {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="입력하세요" />
      <p>입력값: {text}</p>
    </div>
  );
}
