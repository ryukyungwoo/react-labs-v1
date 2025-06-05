import { useNumberStore } from "../store/NumberStore";

export default function TrialCounter() {
  const endGame = useNumberStore((s) => s.endgame);
  const list = useNumberStore((s) => s.trials);
  return endGame ? (
    <div>you currect in {list.length} times</div>
  ) : (
    <div>try: {list.length} times</div>
  );
}
