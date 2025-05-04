import React from 'react';
import Menu from '../components/Menu';

const ListaDeGastos = () => {
  // Datos de ejemplo para la tabla
  const gastos = [
    { id: 1, empleado: 'Ana López', compra: 'Laptop', concepto: 'Equipo nuevo para diseño', monto: 18000, fecha: '2024-03-20' },
    { id: 2, empleado: 'Luis Pérez', compra: 'Silla ergonómica', concepto: 'Mejorar ergonomía', monto: 3500, fecha: '2024-03-19' },
    { id: 3, empleado: 'María Ruiz', compra: 'Curso online', concepto: 'Capacitación en React', monto: 1200, fecha: '2024-03-18' },
    { id: 4, empleado: 'Carlos Gómez', compra: 'Monitor', concepto: 'Reemplazo de monitor dañado', monto: 4200, fecha: '2024-03-17' },
    { id: 5, empleado: 'Sofía Torres', compra: 'Teclado mecánico', concepto: 'Productividad', monto: 1500, fecha: '2024-03-16' },
    { id: 6, empleado: 'Pedro Díaz', compra: 'Licencia Figma', concepto: 'Herramienta de diseño', monto: 900, fecha: '2024-03-15' },
    { id: 7, empleado: 'Lucía Fernández', compra: 'Audífonos', concepto: 'Trabajo remoto', monto: 2200, fecha: '2024-03-14' },
    { id: 8, empleado: 'Miguel Castro', compra: 'Mouse inalámbrico', concepto: 'Accesorio de oficina', monto: 800, fecha: '2024-03-13' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: '#f6fafd' }}>
      <Menu />
      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-[90%] max-w-6xl mt-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Marketing</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-700 uppercase">Empleado</th>
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-700 uppercase">Compra</th>
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-700 uppercase">Concepto</th>
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-700 uppercase">Monto</th>
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-700 uppercase">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {gastos.map((gasto, idx) => (
                  <tr key={gasto.id} className={idx % 2 === 1 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-3 text-lg text-gray-800 font-bold">{gasto.empleado}</td>
                    <td className="px-4 py-3 text-base text-gray-700">{gasto.compra}</td>
                    <td className="px-4 py-3 text-base text-gray-700">{gasto.concepto}</td>
                    <td className="px-4 py-3 text-base text-gray-700">${gasto.monto.toLocaleString()}</td>
                    <td className="px-4 py-3 text-base text-gray-700">{gasto.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaDeGastos;
