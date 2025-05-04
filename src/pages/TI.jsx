import React from 'react';
import Menu from '../components/Menu';

const ListaDeGastos = () => {
  // Datos de ejemplo para la tabla (relacionados con TI)
  const gastos = [
    { id: 1, empleado: 'Javier Morales', compra: 'Servidor Dedicado', concepto: 'Infraestructura para backend', monto: 32000, fecha: '2024-04-10' },
    { id: 2, empleado: 'Elena Ríos', compra: 'Router Empresarial', concepto: 'Mejorar red interna', monto: 7800, fecha: '2024-04-09' },
    { id: 3, empleado: 'Raúl Sánchez', compra: 'Licencia Windows Server', concepto: 'Actualización de sistema operativo', monto: 5400, fecha: '2024-04-08' },
    { id: 4, empleado: 'Patricia Vega', compra: 'Firewall', concepto: 'Seguridad de red', monto: 12500, fecha: '2024-04-07' },
    { id: 5, empleado: 'Fernando Ruiz', compra: 'Disco SSD 2TB', concepto: 'Almacenamiento para servidores', monto: 4100, fecha: '2024-04-06' },
    { id: 6, empleado: 'Gabriela Torres', compra: 'Monitor 4K', concepto: 'Desarrollo y pruebas', monto: 8600, fecha: '2024-04-05' },
    { id: 7, empleado: 'Ricardo Díaz', compra: 'Switch de Red', concepto: 'Expansión de red LAN', monto: 3900, fecha: '2024-04-04' },
    { id: 8, empleado: 'Sandra López', compra: 'Antivirus Corporativo', concepto: 'Protección de endpoints', monto: 2100, fecha: '2024-04-03' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: '#f6fafd' }}>
      <Menu />
      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-[90%] max-w-6xl mt-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Tecnologías de la Información (TI)</h2>
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
