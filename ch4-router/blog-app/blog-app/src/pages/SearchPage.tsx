import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    // to result page
    navigate(`/result?q=${encodeURIComponent(input)}`);
    setInput("");
  }
  return (
    <div>
      <h2>search page</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="input search text ..."
        value={input}
      />
      <button onClick={handleSearch} className="border">
        search
      </button>
    </div>
  );
}
