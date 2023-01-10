import { useState } from "react";

const ManageData = () => {
  let [number, setNumber] = useState(10);
  return (
    <div>
      <p>Valor: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default ManageData;
