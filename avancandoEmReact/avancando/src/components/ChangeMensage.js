const ChangeMensage = ({ changeMensage }) => {
  const messages = ["Oi", "Olá", "Oi, tudo bem?"];

  return (
    <div>
      <button onClick={() => changeMensage(messages[0])}>1</button>
      <button onClick={() => changeMensage(messages[1])}>2</button>
      <button onClick={() => changeMensage(messages[2])}>3</button>
    </div>
  );
};
export default ChangeMensage;
