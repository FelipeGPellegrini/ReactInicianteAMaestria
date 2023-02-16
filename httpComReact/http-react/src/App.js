import { useEffect, useState } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products);
  return (
    <div className="App">
      <h1>JSON server</h1>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;