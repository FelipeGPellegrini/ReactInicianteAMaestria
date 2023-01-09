const Challenge = () => {
  const primeiroNumero = Math.round(Math.random() * 100);
  const segundoNumero = Math.round(Math.random() * 100);

  return (
    <p>
      {primeiroNumero} + {segundoNumero} = {primeiroNumero + segundoNumero}
    </p>
  );
};

export default Challenge;
