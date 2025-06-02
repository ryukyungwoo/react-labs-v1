type WelcomeProps = { isLogin: boolean };

export default function Welcome({ isLogin }: WelcomeProps) {
  return <div>{!isLogin && <button>로그인</button>}</div>;
}
