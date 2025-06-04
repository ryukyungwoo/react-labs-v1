import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleFocus() {
    inputRef.current?.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="input ..." />
      <button onClick={handleFocus}>set focus</button>
    </div>
  );
}
