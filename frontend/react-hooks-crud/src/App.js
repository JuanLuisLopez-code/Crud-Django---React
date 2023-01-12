import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import CategoriasList from "./pages/CategoriasList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/categorias" element={<CategoriasList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
