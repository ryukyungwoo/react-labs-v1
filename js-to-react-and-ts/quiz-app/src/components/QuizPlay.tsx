import { useEffect, useRef, useState } from "react";
import { useQuizStore, type Result } from "../store/QuizStore";
import { usePageStore } from "../store/PageStore";

export default function QuizPlay() {
  const quizList = useQuizStore((s) => s.quizList);
  const addResult = useQuizStore((s) => s.addResult);
  const quizEnd = usePageStore((s) => s.quizEnd);

  const [remainedTime, setRaminedTime] = useState(
    quizList.length ? quizList[0].timeLimit : 0
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const nowQuiz = quizList[current];
  const timeId = useRef(0);

  useEffect(() => {
    setRaminedTime(nowQuiz.timeLimit);
    setSelected(null);

    timeId.current = setInterval(() => {
      setRaminedTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timeId.current);
  }, [current, nowQuiz.timeLimit]);

  useEffect(() => {
    if (remainedTime <= 0) nextQuiz();
  }, [remainedTime]);

  function nextQuiz() {
    if (current + 1 < quizList.length) {
      saveResult();
      setCurrent(current + 1);
    } else {
      saveResult();
      clearInterval(timeId.current);
      quizEnd();
    }
  }

  function saveResult() {
    const result: Result = {
      correct: selected === nowQuiz.answer ? "right" : "wrong",
      id: nowQuiz.id,
      question: nowQuiz.question,
      choice: selected !== null ? nowQuiz.choices[selected] : "no selected",
      answer: nowQuiz.choices[nowQuiz.answer],
    };
    addResult(result);
  }

  function handleSubmit() {
    if (selected === null) return;
    nextQuiz();
  }

  return (
    <div>
      <h2>
        Q{nowQuiz.id}. {nowQuiz.question}
      </h2>
      <p>time limit: {remainedTime}초</p>
      <ol>
        {nowQuiz.choices.map((choice, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name={`quiz-${nowQuiz.id}`}
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                style={{ marginRight: 8 }}
              />
              {choice}
            </label>
          </li>
        ))}
      </ol>
      <button onClick={handleSubmit} disabled={selected === null}>
        submit
      </button>
    </div>
  );
}
