// <div></div> 를 제거하면 에러 발생

export default function JSXBasic() {
  return (
    <div>
      <p>JSX는 태그를 닫아야 해요!</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
        width={100}
      />
    </div>
  );
}
