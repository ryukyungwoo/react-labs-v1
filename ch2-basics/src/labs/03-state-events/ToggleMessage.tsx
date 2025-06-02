import { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setToggle] = useState(false);

  function setVisible() {
    setToggle(!isVisible);
  }

  return (
    <div>
      <button onClick={setVisible}>메세지 보기 / 숨기기</button>
      {isVisible ? <p>비밀 메세지입니다!</p> : <p>...</p>}
    </div>
  );
}
