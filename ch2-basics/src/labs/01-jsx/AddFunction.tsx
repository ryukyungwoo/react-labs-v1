export default function AddFunction() {
  const a = 5;
  const b = 3;

  return (
    <div>
      <h1>a = {a}</h1>
      <h1>b = {b}</h1>
      <h1>a + b = {a + b}</h1>
      <h1>add(a, b) = {add(a, b)}</h1>
    </div>
  );
}

function add(x: number, y: number): number {
  return x + y;
}
