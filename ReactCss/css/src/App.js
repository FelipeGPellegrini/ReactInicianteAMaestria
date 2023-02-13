import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const number = 8;
  const redLine = false;
  return (
    <div className="App">
      <h1>React CSS's</h1>
      <p>parágrafo 1 do app</p>
      <MyComponent />
      <p style={{ color: "red", padding: "30px" }}>
        Parágrafo 2 do app, testando inline style
      </p>
      <h3 style={number > 5 ? { color: "magenta" } : { color: "green" }}>
        CSS dinâmico
      </h3>
      <h3 style={number < 5 ? { color: "magenta" } : { color: "green" }}>
        CSS dinâmico
      </h3>
      <p className={redLine ? "redLine" : "normal"}>Classe Dinâmica</p>
      <Title />
    </div>
  );
}

export default App;
