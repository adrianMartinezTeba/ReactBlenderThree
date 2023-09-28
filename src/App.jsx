import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home";
import Catalogo from "./components/Catalogo/Catalogo";
import About from "./components/About/About";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import ModelInd from "./components/ModelInd/ModelInd"; // Asegúrate de importar ModelInd
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/about' element={<About />} />
          <Route path='/modelViewer' element={<ModelViewer />} />
          <Route path='/modelInd/:nombre' element={<ModelInd />} /> {/* Ruta para la vista de detalle */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
