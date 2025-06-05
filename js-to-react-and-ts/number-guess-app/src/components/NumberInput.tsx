import { useEffect, useState } from "react";
import { useNumberStore } from "../store/NumberStore";

export default function NumberInput() {
  const addTrial = useNumberStore((state) => state.addTrial);
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const endGame = useNumberStore((s) => s.endgame);

  useEffect(() => {
    if (endGame) {
      setDisabled(!disabled);
    }
  }, [endGame]);

  function clickBtn() {
    if (input === "") return alert("input plz");

    const num = Number(input);
    if (typeof num === "string") {
      return setInput(""), alert("only number");
    }

    if (num >= 100 || num < 0) {
      return setInput(""), alert("only 0 - 100");
    }
    addTrial(num);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="plz input 0 - 100 numbers"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {endGame ? (
        <button onClick={() => window.location.reload()}>retry</button>
      ) : (
        <button onClick={clickBtn} disabled={disabled}>
          try
        </button>
      )}
    </div>
  );
}
