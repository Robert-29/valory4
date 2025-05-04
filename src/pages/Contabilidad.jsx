import React from 'react';
import Menu from '../components/Menu';

const ListaDeGastos = () => {
  // Datos de ejemplo para la tabla (relacionados con Contabilidad)
  const gastos = [
    { id: 1, empleado: 'Marina López', compra: 'Software contable', concepto: 'Actualización de licencias', monto: 5200, fecha: '2024-04-12' },
    { id: 2, empleado: 'Óscar Ramírez', compra: 'Consultoría fiscal', concepto: 'Asesoría para declaración anual', monto: 3500, fecha: '2024-04-11' },
    { id: 3, empleado: 'Patricia Salas', compra: 'Papelería', concepto: 'Material para reportes financieros', monto: 800, fecha: '2024-04-10' },
    { id: 4, empleado: 'Jorge Méndez', compra: 'Capacitación', concepto: 'Curso de normatividad SAT', monto: 2100, fecha: '2024-04-09' },
    { id: 5, empleado: 'Laura Torres', compra: 'Auditoría externa', concepto: 'Revisión de estados financieros', monto: 7800, fecha: '2024-04-08' },
    { id: 6, empleado: 'Sergio Díaz', compra: 'Impresora', concepto: 'Impresión de facturas', monto: 3200, fecha: '2024-04-07' },
    { id: 7, empleado: 'Gabriela Ruiz', compra: 'Servicio de nómina', concepto: 'Pago mensual de nómina', monto: 4100, fecha: '2024-04-06' },
    { id: 8, empleado: 'Héctor Morales', compra: 'Archivo digital', concepto: 'Digitalización de documentos', monto: 2300, fecha: '2024-04-05' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: '#f6fafd' }}>
      <Menu />
      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-[90%] max-w-6xl mt-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Contabilidad</h2>
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
