import "./App.css";

import Foto2 from "./assets/Foto2.jpg";
import ListRender from "./components/ListRender";

import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import TesteFragment from "./components/TesteFragment";
import PropChildren from "./components/PropChildren";
import FunctionProp from "./components/FunctionProp";
import { useState } from "react";
import ShowMensage from "./components/ShowMensage";
import ChangeMensage from "./components/ChangeMensage";

function App() {
  const cars = [
    {
      brand: "Renault",
      km: 15060,
      color: "Branco",
      newCar: false,
    },
    {
      brand: "VW",
      km: 0,
      color: "Prata",
      newCar: true,
    },
    {
      brand: "Nissan",
      km: 20300,
      color: "Preto",
    },
  ];
  const userName = "Maria";

  function showHour() {
    console.log("Exec");
  }

  const [mensage, setMensage] = useState("");

  function changeMensage(msg) {
    setMensage(msg);
  }

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
      <ConditionalRender />
      <ShowUserName name="João Gomes" />
      <ShowUserName name={userName} />
      <CarDetails brand="Porsche" km={0} color="Branco" newCar={true} />
      <CarDetails brand="Ferrari" km={13500} color="Vermelho" newCar={false} />
      <CarDetails brand="BMW" km={0} color="Preto" newCar={true} />
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      <TesteFragment />
      <PropChildren propNormal={"Testing"}>
        <p>Testando Children</p>
      </PropChildren>
      <FunctionProp myFunc={showHour} />
      <ShowMensage msg={mensage} />
      <ChangeMensage changeMensage={changeMensage} />
    </div>
  );
}

export default App;
