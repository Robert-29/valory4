import Costco from '../../public/Costco';

const MostrarProductosCostco = () => {
  return (
    <section className="px-6 py-10 bg-[#f9fbfd]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos de Costco</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Costco.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-sm p-4 hover:shadow-md transition duration-200"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-semibold text-gray-800 mb-1">{producto.nombre}</h3>
            <p className="text-sm text-gray-600 mb-3">{producto.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-700 font-bold">${producto.precio.toFixed(2)} MXN</span>
              <a
                href={producto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Ver más →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostrarProductosCostco;
