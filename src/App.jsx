import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Walmart from './pages/Walmart';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Walmart" element={<Walmart />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
