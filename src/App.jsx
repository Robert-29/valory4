import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Walmart from './pages/Walmart';
import Login from './pages/Login';
import Costco from './pages/Costco';
import Marketing from './pages/Marketing';
import TI from './pages/TI';
import RH from './pages/RecursosHumanos';
import Contabilidad from './pages/Contabilidad';
import ServicioAlCliente from './pages/ServicioAlCliente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Walmart" element={<Walmart />} />
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/walmart" element={<Walmart />} />
        <Route path="/costco" element={<Costco />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/ti" element={<TI />} />
        <Route path="/rh" element={<RH />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/servicioalcliente" element={<ServicioAlCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
