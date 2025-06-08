import QuizPlay from "../components/QuizPlay";
import QuizResult from "../components/QuizResult";
import QuizSetup from "../components/QuizSetup";
import { usePageStore } from "../store/PageStore";

export default function QuizFrontPage() {
  const isStarting = usePageStore((s) => s.isStarting);
  const isSovling = usePageStore((s) => s.isSovling);
  const isEnding = usePageStore((s) => s.isEnding);
  return (
    <div>
      <h1>Quiz Page</h1>
      {isStarting ? <QuizSetup /> : ""}
      {isSovling ? <QuizPlay /> : ""}
      {isEnding ? <QuizResult /> : ""}
    </div>
  );
}
