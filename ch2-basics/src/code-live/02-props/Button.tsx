// props로 함수를 넘김

type ButtonProps = {
  label: string;
  // 함수
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
