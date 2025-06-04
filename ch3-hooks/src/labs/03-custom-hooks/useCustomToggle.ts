import { useState } from "react";

export function useCustomToggle(init: boolean) {
  const [value, setValue] = useState(init);

  function toggle() {
    setValue((value) => !value);
  }

  return [value, toggle];
}
