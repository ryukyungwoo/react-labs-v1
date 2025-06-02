type ChildProps = {
  count: number;
  onIncrease: () => void;
};

export default function Child({ count, onIncrease }: ChildProps) {
  return (
    <div>
      <h3>자식 컴포넌트</h3>
      <p>부모가 넘겨준 count 값: {count}</p>
      <button onClick={onIncrease}>카운트 +1 (자식 버튼)</button>
    </div>
  );
}
