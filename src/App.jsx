import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UltimosDiez from './components/UltimosDiez';
import Walmart from './pages/Walmart';
import Login from './pages/Login';
import Costco from './pages/Costco';
import Marketing from './pages/Marketing';
import TI from './pages/TI';
import RH from './pages/RecursosHumanos';
import Contabilidad from './pages/Contabilidad';
import ServicioAlCliente from './pages/ServicioAlCliente';
import Menu from './components/Menu';
import TransaccionesPage from './pages/TransaccionesPage';

function App() {
  const [areaSeleccionada, setAreaSeleccionada] = useState("");

  return (
    <BrowserRouter>
      <Menu onSelectArea={setAreaSeleccionada} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/walmart" element={<Walmart />} />
        <Route path="/costco" element={<Costco />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ultimosdiez" element={<UltimosDiez />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/ti" element={<TI />} />
        <Route path="/rh" element={<RH />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/servicioalcliente" element={<ServicioAlCliente />} />
        <Route path="/transacciones" element={<TransaccionesPage area={areaSeleccionada} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
