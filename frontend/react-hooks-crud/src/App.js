import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import CategoriasList from "./pages/CategoriasList";
import CategoriasCreate from "./pages/CategoriasCreate";
import CategoriasUpdate from "./pages/CategoriasUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoriasList />} />
          <Route path="/create" element={<CategoriasCreate />} />
          <Route path="/update/:id" element={<CategoriasUpdate />} />
          <Route path="/categorias" element={<CategoriasList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
