import { useEffect } from "react";

export default function BasicEffect() {
  useEffect(() => {
    alert("mount"); // 개발환경이기 때문에 두번 호출 됨
  }, []);
  return <div></div>;
}
