import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const nome = "Felipe";
  return (
    <div>
      <h1>Render Conditional</h1>
      {x && <p>O X é true</p>}
      {!x && <p>O X é false</p>}
      <h1>Nome render</h1>
      {nome === "Felipe" ? <p>O nome é Felipe</p> : <p>Nome não encontrado</p>}
    </div>
  );
};

export default ConditionalRender;
