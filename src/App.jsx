import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Walmart from './pages/Walmart';
import Login from './pages/Login';
import Costco from './pages/Costco';

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
