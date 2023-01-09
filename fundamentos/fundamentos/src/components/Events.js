const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Posso renderizar isso</h1>;
    } else {
      return <h1>Posso renderizar isso também!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
        <button
          onClick={() => {
            console.log("Ativou o evento in line");
          }}
        >
          Clique aqui!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
