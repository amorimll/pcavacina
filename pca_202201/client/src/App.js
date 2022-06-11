import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.js"
import Agendamento from "./pages/agendamento.js"
import VerAgendamento from "./pages/verAgendamentos"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={"/home"} element={<Home/>}/>
          <Route path={"/agendamento"} element={<Agendamento/>}/>
          <Route path={"/ver-agendamentos"} element={<VerAgendamento/>}/>
        </Routes>
    </div>
  );
}

export default App;