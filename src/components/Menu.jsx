import {
  useConnectWallet,
  useWallets,
  useLogout
} from '@privy-io/react-auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Menu = ({ onSelectArea }) => {
  const { connectWallet } = useConnectWallet();
  const { wallets, ready } = useWallets();
  const logout = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const wallet = wallets[0];

  const areas = [
    "Contabilidad",
    "Recursos Humanos",
    "Tecnologías de la Información (TI)",
    "Marketing",
    "Servicio al Cliente"
  ];

  const handleClick = (area) => {
    onSelectArea(area);
    navigate('/transacciones');
    setIsOpen(false);
  };

  const handleConnect = async () => {
    try {
      await connectWallet();
      console.log("Wallet conectada exitosamente");
    } catch (error) {
      console.error("Error al conectar wallet:", error);
    }
  };

  const handleLogout = async () => {
    try {
      if (wallet && typeof wallet.disconnect === 'function') {
        await wallet.disconnect(); // Cierra conexión con la wallet si es posible
        console.log("Wallet desconectada");
      } else {
        console.warn("La wallet no soporta desconexión programática.");
      }

      await logout();       // Cierra sesión en Privy
      navigate('/');        // Redirige al login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (location.pathname === '/') return null;

  const formattedAddress = wallet?.address
    ? `${wallet.address.slice(0, 5)}...${wallet.address.slice(-4)}`
    : null;

  return (
    <header className="flex justify-between items-center bg-white px-6 py-7 shadow-sm">
      <div className="flex items-center space-x-6">
        <h1 className="text-blue-600 font-bold text-2xl">VALORY4</h1>
        <div className="relative">
          <div 
            className="flex text-2xl items-center text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Historial
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => handleClick(area)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {area}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {ready && wallet ? (
          <>
            <span className="text-sm font-mono text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">
              {formattedAddress}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded"
            >
              Cerrar Wallet
            </button>
          </>
        ) : (
          <button
            onClick={handleConnect}
            className="text-white bg-blue-600 px-4 py-2 text-sm font-bold cursor-pointer rounded-2xl"
          >
            Conectar Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Menu;