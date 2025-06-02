const users = [
  { id: 1, name: "윤유저" },
  { id: 2, name: "김유저" },
  { id: 3, name: "이유저" },
];

export default function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
