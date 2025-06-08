import { usePageStore } from "../store/PageStore";
import { useQuizStore, type Result } from "../store/QuizStore";

export default function QuizResult() {
  const resultList = useQuizStore((s) => s.resultList);
  const quizRestart = usePageStore((s) => s.quizRestart);

  const result = resultList.filter(
    (result: Result) => result.correct === "right"
  ).length;
  return (
    <div>
      <h2>result : {result}</h2>
      <button onClick={quizRestart}>replay</button>
      {resultList.map((result: Result) => (
        <div key={result.id} style={{ border: "2px solid" }}>
          <h3>id : {result.id}</h3>
          <h3>correct : {result.correct}</h3>
          <h3>question : {result.question}</h3>
          <h3>choice : {result.choice}</h3>
          <h3>answer : {result.answer}</h3>
        </div>
      ))}
    </div>
  );
}
