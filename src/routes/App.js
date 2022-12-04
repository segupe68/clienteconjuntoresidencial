import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InmueblesCreados } from '../pages/InmueblesCreados';
import { InmuebleDetalle } from '../pages/InmuebleDetalle';





function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<InmueblesCreados />} />
        <Route path='/inmueble/:id' element={<InmuebleDetalle />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
