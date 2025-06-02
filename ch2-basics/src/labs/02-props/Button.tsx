interface ButtonProps {
  label: string;
  onclick: () => void;
}

export default function Button({ label, onclick }: ButtonProps) {
  return <button onClick={onclick}>{label}</button>;
}
