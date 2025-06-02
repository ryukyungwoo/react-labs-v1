interface User {
  id: number;
  name: string;
}

export default function UserItem({ id, name }: User) {
  return (
    <li key={id}>
      {id} : {name}
    </li>
  );
}
