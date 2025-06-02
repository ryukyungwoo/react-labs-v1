// JSX : javascript + html
export default function Expression() {
  // 자바스크립 코드 작성 가능
  const userName = "유경우";
  const greet = () => "안녕하세요";

  return (
    <>
      {/** {Expression} 표현식으로 묶어서 변수를 표현 가능 */}
      <h2>{userName}</h2>
      <h3>2 + 3 = {2 + 3}</h3>
      {/* <h3>{if (true) {console.log()}}</h3>/일정한 값으로 도출되는 것들만 표현식으로 표현 가능 */}
      <h3>{greet()}</h3>
    </>
  );
}
