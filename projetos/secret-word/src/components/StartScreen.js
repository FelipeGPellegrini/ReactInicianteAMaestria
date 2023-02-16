import "./StartScreen.css";

const StartScreen = ({ startGame, clickStartGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Passe o mouse ou clique para começar a jogar</p>
      <br />
      <br />
      <br />
      <br />
      <button onClick={startGame} onMouseOver={clickStartGame}>
        Começar o jogo
      </button>
    </div>
  );
};

export default StartScreen;
