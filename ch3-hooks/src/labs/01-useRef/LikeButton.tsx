import { useRef, useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLike = () => {
    if (disabled) return;
    setLikes(likes + 1);
    setDisabled(true);

    timerRef.current = setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleLike} disabled={disabled}>
        좋아요 {likes > 0 ? `(${likes})` : ""}
      </button>
      {disabled && <span style={{ marginLeft: 10, color: "#888" }}>1초 대기중...</span>}
    </div>
  );
}
