import { useState } from "react";

export default function MultiState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <p>
        이름: {name}, 나이: {age}
      </p>
    </div>
  );
}
