import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/nav";
import PuntoUno from "./components/PuntoUno/PuntoUno";
import ProgressBarComponent from "./components/PuntoDos/PuntoDos";
import FormComponent from "./components/PuntoTres/PuntoTres";
import Stopwatch from "./components/PuntoCuatro/PuntoCuatro";
import PasswordGen from "./components/PuntoCinco/PuntoCinco";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* Mostrar Navigation solo en la ruta principal */}
      {location.pathname === "/" && <Navigation />}
      <Routes>
        <Route exact path="/punto-1" element={<PuntoUno />}></Route>
        <Route exact path="/punto-2" element={<ProgressBarComponent />}></Route>
        <Route exact path="/punto-3" element={<FormComponent />}></Route>
        <Route exact path="/punto-4" element={<Stopwatch />}></Route>
        <Route exact path="/punto-5" element={<PasswordGen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
