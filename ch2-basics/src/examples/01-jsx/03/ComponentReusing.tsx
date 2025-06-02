// 컴포넌트 재사용: 같은 컴포넌트를 여러 번 렌더링 가능
function HelloBox() {
  return <div>안녕!</div>;
}

export default function ComponentReusing() {
  return (
    <div>
      <HelloBox />
      <HelloBox />
      <HelloBox />
    </div>
  );
}
