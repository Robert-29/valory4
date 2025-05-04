const transaccionesPorArea = {
  "Contabilidad": [
    {
      wallet: '0xA1B2...F3D4',
      tipo: 'Pago',
      descripcion: 'Pago de servicios contables externos',
      monto: '0.12 ETH',
      fecha: '2025-05-03',
      estado: 'Completada',
    },
    {
      wallet: '0x11CC...9999',
      tipo: 'Compra',
      descripcion: 'Software de contabilidad',
      monto: '0.18 ETH',
      fecha: '2025-05-01',
      estado: 'Pendiente',
    },
    // ... hasta 10
  ],

  "Recursos Humanos": [
    {
      wallet: '0xAA00...BB11',
      tipo: 'Pago',
      descripcion: 'Consultoría de clima laboral',
      monto: '0.15 ETH',
      fecha: '2025-05-02',
      estado: 'Completada',
    },
    {
      wallet: '0x22FF...DD88',
      tipo: 'Contrato',
      descripcion: 'Contratación de plataforma de nómina',
      monto: '0.30 ETH',
      fecha: '2025-04-29',
      estado: 'Fallida',
    },
    // ...
  ],

  "Tecnologías de la Información (TI)": [
    {
      wallet: '0x3333...ABCD',
      tipo: 'Compra',
      descripcion: 'Suscripción a servicios cloud',
      monto: '0.22 ETH',
      fecha: '2025-05-01',
      estado: 'Completada',
    },
    {
      wallet: '0x1234...5678',
      tipo: 'Contrato',
      descripcion: 'Mantenimiento de servidores',
      monto: '0.35 ETH',
      fecha: '2025-04-28',
      estado: 'Completada',
    },
    // ...
  ],

  "Marketing": [
    {
      wallet: '0xAABB...CCDD',
      tipo: 'Pago',
      descripcion: 'Campaña de anuncios blockchain',
      monto: '0.28 ETH',
      fecha: '2025-05-03',
      estado: 'Completada',
    },
    {
      wallet: '0x7788...EEFF',
      tipo: 'Contrato',
      descripcion: 'Servicio de influencers Web3',
      monto: '0.40 ETH',
      fecha: '2025-04-30',
      estado: 'Pendiente',
    },
    // ...
  ],

  "Servicio al Cliente": [
    {
      wallet: '0xFF00...AA99',
      tipo: 'Pago',
      descripcion: 'Plataforma de tickets de soporte',
      monto: '0.20 ETH',
      fecha: '2025-05-02',
      estado: 'Completada',
    },
    {
      wallet: '0x4455...6677',
      tipo: 'Compra',
      descripcion: 'Integración de chatbot con IA',
      monto: '0.33 ETH',
      fecha: '2025-04-27',
      estado: 'Fallida',
    },
    // ...
  ],
};

const estadoEstilo = {
  Completada: 'text-green-600 bg-green-100',
  Pendiente: 'text-yellow-600 bg-yellow-100',
  Fallida: 'text-red-600 bg-red-100',
};

const Transacciones = ({ area }) => {
  const transacciones = transaccionesPorArea[area] || [];

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-blue-600 text-lg">📋</span>
        Últimas Transacciones - {area}
      </h2>

      {transacciones.length === 0 ? (
        <p className="text-gray-500">No hay transacciones disponibles para esta área.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500">
              <tr>
                <th className="px-4 py-3">WALLET</th>
                <th className="px-4 py-3">TIPO</th>
                <th className="px-4 py-3">DESCRIPCIÓN</th>
                <th className="px-4 py-3">MONTO</th>
                <th className="px-4 py-3">FECHA</th>
                <th className="px-4 py-3">ESTADO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {transacciones.map((tx, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3 font-mono text-blue-700">{tx.wallet}</td>
                  <td className="px-4 py-3">{tx.tipo}</td>
                  <td className="px-4 py-3">{tx.descripcion}</td>
                  <td className="px-4 py-3 font-semibold">{tx.monto}</td>
                  <td className="px-4 py-3">{tx.fecha}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${estadoEstilo[tx.estado]}`}
                    >
                      {tx.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Transacciones;
