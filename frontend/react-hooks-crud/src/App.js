import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';

const ListAll = React.lazy(() => import("./pages/CategoriasList"))
const CategoriasCreate = React.lazy(() => import("./pages/CategoriasCreate"))
const CategoriasUpdate = React.lazy(() => import("./pages/CategoriasUpdate"))

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={
          <div>
            Hola
          </div>}>
          <Routes>
            <Route path="/" element={<ListAll />} />
            <Route path="/create" element={<CategoriasCreate />} />
            <Route path="/update/:id" element={<CategoriasUpdate />} />
            <Route path="/categorias" element={<ListAll />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
