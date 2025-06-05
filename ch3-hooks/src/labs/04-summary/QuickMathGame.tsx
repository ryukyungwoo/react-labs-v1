import { useEffect, useRef, useState } from "react";
import { useRandom } from "./useRandom";

export default function QuickMathGame() {
  const [number1, random1] = useRandom();
  const [number2, random2] = useRandom();

  const result = useRef<number>(number1 * number2);

  const [inputValue, setInputValue] = useState<string>("");

  const [disabled, setDisable] = useState(false);

  useEffect(() => {
    random1();
    random2();

    setTimeout(() => {
      console.log("waiting ...");
      alert(result.current);
      setDisable(true);
      matchResult();
    }, 5000);
  }, [result]);

  function matchResult() {
    const userAnswer = Number(inputValue);
    if (userAnswer === result.current) {
      alert("정답입니다!");
    } else {
      alert(`오답입니다. 정답은 ${result} 입니다.`);
    }
  }

  return (
    <div>
      <p>
        1번째 수 : {number1}, 2번째 수 : {number2}
      </p>
      <input
        type="text"
        placeholder="answer ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button disabled={disabled} onClick={matchResult}>
        submit
      </button>
    </div>
  );
}
