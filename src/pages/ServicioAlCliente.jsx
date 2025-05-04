import React from 'react';
import Menu from '../components/Menu';

const ListaDeGastos = () => {
  // Datos de ejemplo para la tabla (relacionados con Servicio al Cliente)
  const gastos = [
    { id: 1, empleado: 'Daniela Pérez', compra: 'Capacitación', concepto: 'Curso de atención telefónica', monto: 1800, fecha: '2024-04-12' },
    { id: 2, empleado: 'Juan Martínez', compra: 'Auriculares', concepto: 'Mejorar calidad de llamadas', monto: 950, fecha: '2024-04-11' },
    { id: 3, empleado: 'Sofía Ramírez', compra: 'Software CRM', concepto: 'Gestión de clientes', monto: 4200, fecha: '2024-04-10' },
    { id: 4, empleado: 'Carlos Torres', compra: 'Sillas ergonómicas', concepto: 'Comodidad para agentes', monto: 3200, fecha: '2024-04-09' },
    { id: 5, empleado: 'María Gómez', compra: 'Material de oficina', concepto: 'Papelería para reportes', monto: 700, fecha: '2024-04-08' },
    { id: 6, empleado: 'Luis Herrera', compra: 'Consultoría', concepto: 'Mejora de procesos de atención', monto: 2500, fecha: '2024-04-07' },
    { id: 7, empleado: 'Fernanda Díaz', compra: 'Encuestas de satisfacción', concepto: 'Evaluación de servicio', monto: 1100, fecha: '2024-04-06' },
    { id: 8, empleado: 'Ricardo Morales', compra: 'Plataforma de tickets', concepto: 'Gestión de incidencias', monto: 3600, fecha: '2024-04-05' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: '#f6fafd' }}>
      <Menu />
      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-[90%] max-w-6xl mt-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Servicio al Cliente</h2>
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
