type UserProps = { name: string; age: number };

export default function UserObjectGreeting(user: UserProps) {
  return (
    <div>
      <h3>이름: {user.name}</h3>
      <h4>나이: {user.age}</h4>
    </div>
  );
}
