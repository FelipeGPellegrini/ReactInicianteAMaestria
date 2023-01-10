import "./App.css";

import Foto2 from "./assets/Foto2.jpg";
import ListRender from "./components/ListRender";

import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img width={400} src="/Foto1.jpg" alt="Código" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img width={400} src={Foto2} alt="Código" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
