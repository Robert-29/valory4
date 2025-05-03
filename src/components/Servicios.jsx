const Servicios = () => {
    return (
      <section className="px-6 py-10 bg-[#f9fbfd]">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Servicios para Pagar</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-blue-500 text-lg">📦</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Hosting Blockchain</h3>
            <p className="text-sm text-gray-500 mb-2">
              Servicio mensual de hosting para sus aplicaciones descentralizadas.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-06-01</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.08 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
  
          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-blue-500 text-lg">💾</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Almacenamiento IPFS</h3>
            <p className="text-sm text-gray-500 mb-2">
              Almacenamiento descentralizado para sus datos y NFTs.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-05-15</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.05 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
  
          {/* Tarjeta 3 */}
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-blue-500 text-lg">🔧</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Mantenimiento de Contratos</h3>
            <p className="text-sm text-gray-500 mb-2">
              Servicio de soporte y actualización para sus contratos inteligentes.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-05-10</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.12 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Servicios;
  