import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import CategoriasList from "./pages/CategoriasList";
// import CategoriasCreate from "./pages/CategoriasCreate";
// import CategoriasUpdate from "./pages/CategoriasUpdate";
import React from 'react';

function App() {

  const ListAll = React.lazy(() => import("./pages/CategoriasList"))
  const CreateCategorias = React.lazy(() => import("./pages/CategoriasCreate"))
  const UpdateCategorias = React.lazy(() => import("./pages/CategoriasUpdate"))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListAll />} />
          <Route path="/create" element={<CreateCategorias />} />
          <Route path="/update/:id" element={<CategoriasUpdate />} />
          <Route path="/categorias" element={<UpdateCategorias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
