import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';

const ListAll = React.lazy(() => import("./pages/CategoriasList"))
const CategoriasCreate = React.lazy(() => import("./pages/CategoriasCreate"))
const CategoriasUpdate = React.lazy(() => import("./pages/CategoriasUpdate"))

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
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
