import React from 'react';
import Menu from '../components/Menu';

const ListaDeGastos = () => {
  // Datos de ejemplo para la tabla (relacionados con Recursos Humanos)
  const gastos = [
    { id: 1, empleado: 'Paola Jiménez', compra: 'Capacitación', concepto: 'Curso de liderazgo', monto: 2500, fecha: '2024-03-22' },
    { id: 2, empleado: 'Roberto Salas', compra: 'Uniformes', concepto: 'Dotación anual de uniformes', monto: 4800, fecha: '2024-03-21' },
    { id: 3, empleado: 'Andrea Molina', compra: 'Evaluación psicométrica', concepto: 'Pruebas para nuevo ingreso', monto: 900, fecha: '2024-03-20' },
    { id: 4, empleado: 'Jorge Herrera', compra: 'Evento de integración', concepto: 'Team building trimestral', monto: 3200, fecha: '2024-03-19' },
    { id: 5, empleado: 'Claudia Torres', compra: 'Consultoría', concepto: 'Asesoría en clima laboral', monto: 2100, fecha: '2024-03-18' },
    { id: 6, empleado: 'Esteban Ríos', compra: 'Reclutamiento', concepto: 'Publicación de vacantes', monto: 600, fecha: '2024-03-17' },
    { id: 7, empleado: 'Verónica Díaz', compra: 'Reconocimientos', concepto: 'Premios a empleados destacados', monto: 1500, fecha: '2024-03-16' },
    { id: 8, empleado: 'Héctor Morales', compra: 'Material de oficina', concepto: 'Papelería para RH', monto: 750, fecha: '2024-03-15' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: '#f6fafd' }}>
      <Menu />
      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-[90%] max-w-6xl mt-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Recursos Humanos</h2>
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
