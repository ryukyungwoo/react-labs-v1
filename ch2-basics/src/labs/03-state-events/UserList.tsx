import React, { useState } from "react";
import UserItem from "./UserItem";

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
  ]);

  const [id, setId] = useState(users.length + 1);
  const [name, setName] = useState("");

  function inputName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function pushUser() {
    setId(id + 1);
    const user = {
      id,
      name,
    };
    setUsers([...users, user]);
    setName("");
  }

  function deleteUser(id: number) {
    setUsers(users.filter((user) => id !== user.id));
  }

  return (
    <div>
      <p>유저 생성 : {users.length}</p>
      <input
        onChange={inputName}
        placeholder="이름을 입력하세요 ..."
        value={name}
      />
      <button onClick={pushUser}>추가</button>
      {users.map((user) => (
        <>
          <UserItem id={user.id} name={user.name} />
          <button onClick={() => deleteUser(user.id)}>삭제</button>
        </>
      ))}
    </div>
  );
}
