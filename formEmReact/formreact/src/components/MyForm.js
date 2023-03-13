import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  let [name, setName] = useState(user ? user.name : "");
  let [email, setEmail] = useState(user ? user.email : "");
  let [bio, setBio] = useState(user ? user.bio : "");
  let [role, setRole] = useState(user ? user.role : "");

  function changeName(e) {
    setName(e.target.value);
  }

  // console.log(name);
  // console.log(email);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Enviando formulário");
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite seu nome..."
        onChange={changeName}
        value={name}
      />
      <label>
        <span>E-mail: </span>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>

      <label>
        <span>Bio: </span>
        <textarea
          name="bio"
          id="ibio"
          placeholder="Digite sua bio..."
          onChange={(e) => {
            setBio(e.target.value);
          }}
          value={bio}
        ></textarea>
      </label>
      <label>
        <span>Função: </span>
        <select
          name="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}
        >
          <option value="adm">Administrador</option>
          <option value="ger">Gerente</option>
          <option value="adv">Advogado</option>
        </select>
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default MyForm;
