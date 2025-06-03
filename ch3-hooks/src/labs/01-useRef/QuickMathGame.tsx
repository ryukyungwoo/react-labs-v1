import { useRef, useState } from "react";

function getRandomNum() {
  return Math.floor(10 + Math.random() * 90); // 10~99
}

export default function QuickMathGame() {
  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<number | null>(null);
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);
  const [result, setResult] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    const n1 = getRandomNum();
    const n2 = getRandomNum();
    setA(n1);
    setB(n2);
    setAnswer("");
    setResult("");
    setDone(false);
    setTimeout(() => inputRef.current?.focus(), 30);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDone(true);
      if (n1 !== null && n2 !== null) {
        const correct = n1 * n2;
        if (parseInt(answer.trim(), 10) === correct) {
          setResult("정답입니다!");
        } else {
          setResult(`오답입니다. 정답은 ${n1} × ${n2} = ${correct}입니다.`);
        }
      }
    }, 5000);
  };

  return (
    <div>
      <button onClick={startGame}>시작/다시 시작</button>
      <div style={{ margin: "18px 0", fontSize: "1.1rem" }}>
        {a !== null && b !== null ? (
          <b>
            문제: {a} × {b} = ?
          </b>
        ) : (
          <span>시작 버튼을 누르세요!</span>
        )}
      </div>
      <input
        ref={inputRef}
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        disabled={a === null || done}
        placeholder="정답 입력"
        style={{ minWidth: 100 }}
      />
      <div style={{ marginTop: 12, color: "#2979ff", minHeight: 22 }}>
        {done && a !== null && b !== null ? (
          <div>{result}</div>
        ) : a !== null && b !== null ? (
          <span style={{ color: "#888" }}>5초 안에 입력하세요!</span>
        ) : null}
      </div>
    </div>
  );
}
