import { useState } from "react";

export function useRandom(): [number, () => void] {
  const [number, setNumber] = useState(0);

  function random() {
    setNumber(Math.floor(Math.random() * 90) + 10);
  }

  return [number, random];
}
