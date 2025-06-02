type PropsFunctionProps = { onClick: () => void };

export default function PropsFunction({ onClick }: PropsFunctionProps) {
  return <button onClick={onClick}>누르기</button>;
}
