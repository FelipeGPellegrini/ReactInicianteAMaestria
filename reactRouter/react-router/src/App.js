import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// Components

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// Config React-Router

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          {/* Rota Search */}
          <Route path="/search" element={<Search />} />
          {/*/ No match route */}
          <Route path="*" element={<NotFound />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
