import { useState } from "react";
import { useQuizStore } from "../store/QuizStore";
import { usePageStore } from "../store/PageStore";

export default function QuizSetup() {
  const loadQuizList = useQuizStore((s) => s.loadQuizList);
  const quizStart = usePageStore((s) => s.quizStart);

  const [input, setInput] = useState(3);

  function start() {
    loadQuizList(input);
    quizStart();
  }
  return (
    <div>
      <label>choice quiz amount:</label>
      <select value={input} onChange={(e) => setInput(Number(e.target.value))}>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div>
        <button onClick={start}>start</button>
      </div>
    </div>
  );
}
