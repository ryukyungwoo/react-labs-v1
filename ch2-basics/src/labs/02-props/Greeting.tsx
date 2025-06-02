type User = {
  name: string;
};

export default function Greeting({ name }: User) {
  return (
    <div>
      <p>안녕하세요, {name}님!</p>
    </div>
  );
}
