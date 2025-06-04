import { useState } from "react";

type ToggleReturn = [boolean, () => void];

// custom 훅을 사용할 땐 이름을 무조건 use로 시작해야 함
export function useToggle(init = false): ToggleReturn {
  const [on, setOn] = useState<boolean>(init);

  function toggle() {
    setOn(!on);
  }

  return [on, toggle];
}
