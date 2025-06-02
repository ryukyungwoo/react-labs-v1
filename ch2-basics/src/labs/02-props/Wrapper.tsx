interface Wrapper {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Wrapper) {
  return <div>{children}</div>;
}
