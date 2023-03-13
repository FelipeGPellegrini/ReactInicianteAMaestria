import { useState } from "react";

const HookUseState = () => {
  // useState
  let userName = "João";

  const [name, setName] = useState("Felipe");

  const changeNames = () => {
    userName = "João Souza";

    setName("Felipe Pellegrini");
  };

  // useState e Input

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* useState */}
      <h2>UseState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* useState e Input */}
      <p>Digite a sua idade: </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} ano(s)!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
