import "./UserDetails.css";

const UserDetails = () => {
  const users = [
    { name: "Felipe", idade: 18, profissão: "Desenvolvedor" },
    { name: "João", idade: 16, profissão: "Estudante" },
    { name: "Júlio", idade: 26, profissão: "Professor" },
  ];
  return (
    <div>
      {users.map((users) => (
        <div>
          <p>Nome: {users.name}</p>
          <p>Idade: {users.idade}</p>
          <p>Profissão: {users.profissão}</p>
          {users.idade >= 18 && <p>PODE TIRAR CARTEIRA!</p>}
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
