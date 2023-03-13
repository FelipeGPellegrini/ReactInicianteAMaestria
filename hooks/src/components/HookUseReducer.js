import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {};

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
