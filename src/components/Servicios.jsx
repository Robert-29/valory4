const Servicios = () => {
  return (
    <section className="px-6 py-10 bg-[#f9fbfd]">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Servicios para Pagar</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Agua */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="https://images.vexels.com/content/145371/preview/waterdrop-sharp-glimpse-stroke-ff203e.png"
            alt="Agua"
            className="w-full h-32 object-contain p-3 bg-blue-50"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Servicio de Agua</h3>
            <p className="text-sm text-gray-500 mb-2">
              Pago mensual por suministro de agua potable.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-05-12</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.06 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Luz */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1694/1694729.png"
            alt="Luz"
            className="w-full h-32 object-contain p-3 bg-yellow-50"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Servicio de Electricidad</h3>
            <p className="text-sm text-gray-500 mb-2">
              Pago por consumo eléctrico del mes actual.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-05-08</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.09 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Gas */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1598/1598889.png"
            alt="Gas"
            className="w-full h-32 object-contain p-3 bg-orange-50"
          />
          <div className="p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Servicio de Gas</h3>
            <p className="text-sm text-gray-500 mb-2">
              Recibo mensual por consumo de gas doméstico.
            </p>
            <p className="text-xs text-gray-400 mb-4">Vence: 2025-05-15</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">0.07 ETH / mes</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
                Pagar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
