import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    // isLogined redirect to home ...
    return <Navigate to={"/"} replace />;
  }
  return (
    <div>
      <h2>login page</h2>
      <button onClick={() => setIsLogin(!isLogin)}>login</button>
    </div>
  );
}
