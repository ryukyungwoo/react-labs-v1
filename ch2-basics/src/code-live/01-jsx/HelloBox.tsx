function Hello() {
  return <div>Hello!!!</div>;
}

export default function HelloBox() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}
