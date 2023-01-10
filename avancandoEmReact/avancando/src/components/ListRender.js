import { useState } from "react";

const ListRender = () => {
  const [listName] = useState(["Felipe", "Márcio", "Arrascaeta"]);
  const [users] = useState([
    { id: 123, name: "Felipe" },
    { id: 268, name: "Gabriel" },
    { id: 485, name: "João" },
  ]);
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
    </>
  );
};

export default ListRender;
