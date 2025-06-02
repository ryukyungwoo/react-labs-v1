type PropsChildrenProps = { children: React.ReactNode };

export default function PropsChildren({ children }: PropsChildrenProps) {
  return (
    <div
      style={{ border: "1px solid #888", padding: "1rem", margin: "0.5rem" }}
    >
      {children}
    </div>
  );
}
