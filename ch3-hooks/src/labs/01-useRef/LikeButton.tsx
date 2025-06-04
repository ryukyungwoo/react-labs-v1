import { useRef, useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  function likeClick() {
    setCount((count) => count + 1);
    setTimeout(() => {
      if (btnRef.current) {
        btnRef.current?.focus();
      }
    }, 1000);
  }

  return (
    <div>
      <p>like : {count}</p>
      <button ref={btnRef} onClick={likeClick} disabled={disabled}>
        +
      </button>
    </div>
  );
}
