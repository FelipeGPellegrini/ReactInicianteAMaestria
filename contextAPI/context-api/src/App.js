import "./App.css";

import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Credit from "./pages/Credit";

import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
