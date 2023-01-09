const TemplateExpressions = () => {
  const name = "Felipe";
  const data = {
    age: 18,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX REACT")}</p>
    </div>
  );
};

export default TemplateExpressions;
