import { useEffect } from "react";

export default function MountLog() {
  useEffect(() => {
    console.log("mount!");
  }, []);
  return <div></div>;
}
