type UsernameProps = { name: string };

export default function UserGreeting({ name }: UsernameProps) {
  return <p>안녕하세요, {name}님!</p>;
}
