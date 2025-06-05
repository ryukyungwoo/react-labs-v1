import History from "../components/History";
import NumberInput from "../components/NumberInput";
import TrialCounter from "../components/TrialCounter";

export default function NumberFrontPage() {
  return (
    <div>
      {/* number input */}
      <NumberInput />
      {/* trial count */}
      <TrialCounter />
      {/* history */}
      <History />
    </div>
  );
}
