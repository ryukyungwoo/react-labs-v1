import { useNumberStore } from "../store/NumberStore";
import TryItem from "./TryItem";

export default function History() {
  const list = useNumberStore((s) => s.trials);

  return (
    <ul>
      {list.map((tryItem) => (
        <TryItem key={tryItem.id} trial={tryItem} />
      ))}
    </ul>
  );
}
