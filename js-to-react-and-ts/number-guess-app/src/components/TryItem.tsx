import type { Trial } from "../store/NumberStore";

interface TryProps {
  trial: Trial;
}

export default function TryItem({ trial }: TryProps) {
  return (
    <li>
      {trial.input} {trial.judgement}
    </li>
  );
}
