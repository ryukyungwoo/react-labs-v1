// JSX 중괄호{} 안에 JS 변수/함수/표현식 사용 가능
export default function JSXExpression() {
  const userName = "윤유저";
  const getGreet = () => "오늘도 화이팅!";
  return (
    <div>
      <h2>{userName}님</h2>
      <p>{getGreet()}</p>
      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}
