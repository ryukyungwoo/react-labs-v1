const users = [
  { id: 1, name: "name1" },
  { id: 2, name: "name2" },
  { id: 3, name: "name3" },
  { id: 4, name: "name4" },
  { id: 5, name: "name5" },
];

export default function UserList() {
  return (
    <ul>
      {/* <li>{users[0].name}</li>
      <li>{users[1].name}</li>
      <li>{users[2].name}</li> */}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
