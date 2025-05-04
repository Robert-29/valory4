import { useNavigate } from 'react-router-dom';


const Compras = () => {

  const navigate = useNavigate();

  const manejarClick = () => {
    navigate('/walmart'); // Cambia esto por la ruta que definiste
  };

    return (
      <section className="px-6 py-10 bg-[#f9fbfd]">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Compras Disponibles</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <span className="text-white text-lg">&lt;&gt;</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Walmart</h3>
            <p className="text-sm text-gray-500 mb-4">
              Contrato inteligente estándar para transacciones y acuerdos básicos en blockchain.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.25 ETH</span>
              <button onClick={manejarClick} href=" " className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </button>
            </div>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <span className="text-white text-lg">▦</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Token ERC-20</h3>
            <p className="text-sm text-gray-500 mb-4">
              Implementación completa de token ERC-20 personalizado con funciones adicionales.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.35 ETH</span>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </a>
            </div>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-4">
              <span className="text-white text-lg">🌐</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">NFT Marketplace</h3>
            <p className="text-sm text-gray-500 mb-4">
              Solución completa para crear y vender NFTs en su propia plataforma.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.65 ETH</span>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </a>
            </div>
          </div>
  
          {/* Tarjeta 4 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mb-4">
              <span className="text-white text-lg">🛡️</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Auditoría de Seguridad</h3>
            <p className="text-sm text-gray-500 mb-4">
              Servicio integral de auditoría de seguridad para contratos inteligentes existentes.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.45 ETH</span>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                Comprar <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Compras;
  