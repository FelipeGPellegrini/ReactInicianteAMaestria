import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return <p>Mais informações do produto com id: {id}</p>;
};

export default Info;
