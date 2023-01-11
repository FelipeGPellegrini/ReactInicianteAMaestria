import { useState } from "react";

const ListRender = () => {
  const [listName] = useState(["Felipe", "Márcio", "Arrascaeta"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Felipe" },
    { id: 2, name: "Gabriel" },
    { id: 3, name: "João" },
  ]);
  function deleteUser() {
    let randomNumber = Math.round(Math.random() * 3);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  }

  return (
    <>
      <ul>
        {listName.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deleteUser}>Delete random user</button>
    </>
  );
};

export default ListRender;
