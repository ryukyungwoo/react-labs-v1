import { useToggle } from "./useToggle";

// on/ off
export default function ToggleSwitch() {
  const [on, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{on ? "on" : "off"}</button>
    </div>
  );
}
