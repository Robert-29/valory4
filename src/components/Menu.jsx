import { useConnectWallet } from '@privy-io/react-auth';
import { useState } from 'react';

const Menu = () => {
  const { connectWallet } = useConnectWallet();
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connectWallet();
      console.log("Wallet conectada exitosamente");
    } catch (error) {
      console.error("Error al conectar wallet:", error);
    }
  };

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
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contabilidad</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Recursos Humanos</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tecnologías de la Información (TI)</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marketing</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Servicio al Cliente</a>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={handleConnect}
          className="text-white bg-blue-600 px-4 py-2 text-sm font-bold cursor-pointer rounded-2xl"
        >
          Conectar Wallet
        </button>
      </div>
    </header>
  );
};

export default Menu;
