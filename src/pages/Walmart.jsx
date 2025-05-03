import { Link } from 'react-router-dom';


import { useEffect, useState } from 'react';

const walmart = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/data/walmart.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error cargando JSON:', err));
  }, []);

  return (
    <section className="px-6 py-10 bg-[#f9fbfd]">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Productos de Walmart</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 border hover:shadow-lg transition">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-sm font-bold text-gray-800 mb-1">{producto.nombre}</h3>
            <p className="text-sm text-gray-600 mb-3">{producto.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold">${producto.precio} MXN</span>
              <a
                href={producto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
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

export default walmart;
