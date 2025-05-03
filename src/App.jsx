import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Walmart from './pages/Walmart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walmart" element={<Walmart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
