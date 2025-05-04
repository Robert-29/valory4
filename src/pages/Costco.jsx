import productosCostco from '../../src/components/Costco'; // tu JSON
// o donde tengas tu array

const Costco = () => {
  return (
    <section className="px-6 py-10 bg-[#f9fbfd]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos de Costco</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosCostco.map((producto, index) => (
          <div key={index} className="bg-white p-4 border rounded-xl shadow-sm hover:shadow-md transition">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-gray-800 text-sm mb-1">{producto.nombre}</h3>
            <p className="text-gray-600 text-sm mb-2">{producto.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-700">${producto.precio.toFixed(2)}</span>
              <a
                href={producto.enlace}
                className="text-sm text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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

export default Costco;
