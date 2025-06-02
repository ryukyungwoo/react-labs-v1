// 선택적 props, 기본값 설정
type AlertProps = {
  message: string;
  color?: string;
};

export default function Alert({ message, color = "blue" }: AlertProps) {
  return (
    <div style={{ border: `1px solid ${color}`, color, padding: "0.5rem" }}>
      {message}
    </div>
  );
}
