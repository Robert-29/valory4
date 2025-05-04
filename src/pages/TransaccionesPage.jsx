// src/pages/TransaccionesPage.jsx
import Transacciones from "../components/Transacciones";

const TransaccionesPage = ({ area }) => {
  return (
    <div className="min-h-screen bg-[#f9fbfd]">
      <Transacciones area={area} />
    </div>
  );
};

export default TransaccionesPage;
