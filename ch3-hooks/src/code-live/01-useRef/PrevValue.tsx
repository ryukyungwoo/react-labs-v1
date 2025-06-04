import { useRef, useState } from "react";

export default function PrevValue() {
  const [value, setValue] = useState("");

  const prevValue = useRef("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    prevValue.current = value;
    setValue(e.target.value);
  }
  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder="hi ..."
        onChange={handleChange}
      />
      <p>PrevValue : {prevValue.current}</p>
    </div>
  );
}
