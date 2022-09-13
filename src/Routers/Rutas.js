import { Routes, Route, Link } from "react-router-dom";
import  {Home} from "../Home/Home.js";
import{Menu} from "../Menu/Menu.js"



export function Rutas(){
    return (
        <div classnameName="App">
          <menu></menu>
          <h1>Bienvenido a mi Hotel</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    );
}



