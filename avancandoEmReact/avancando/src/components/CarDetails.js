const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <br />
      <p>Marca: {brand}</p>
      <p>KM: {km}</p>
      <p>Cor: {color}</p>
      {newCar && <p>Este é um carro novo!!</p>}
      <br />
    </div>
  );
};

export default CarDetails;
