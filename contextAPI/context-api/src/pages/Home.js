import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../Components/ChangeCounter";

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {/*3 - Alterando valor do contexto*/}
      <ChangeCounter />
    </div>
  );
};

export default Home;
