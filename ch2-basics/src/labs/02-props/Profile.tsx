type User = {
  name: string;
  age: number;
};

export default function Profile({ name, age }: User) {
  return (
    <div>
      <p>
        안녕하세요, {name}, {age}님!
      </p>
    </div>
  );
}
