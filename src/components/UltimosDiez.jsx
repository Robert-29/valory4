const transacciones = [
  {
    wallet: '0x1A2b...9FfE',
    tipo: 'Compra',
    descripcion: 'Compra de Smart Contract Básico',
    monto: '0.25 ETH',
    fecha: '2025-05-03',
    estado: 'Completada',
  },
  {
    wallet: '0x3D4c...A81B',
    tipo: 'Pago',
    descripcion: 'Pago de servicio de auditoría',
    monto: '0.18 ETH',
    fecha: '2025-05-02',
    estado: 'Completada',
  },
  {
    wallet: '0x7E2a...0D3C',
    tipo: 'Contrato',
    descripcion: 'Despliegue de DApp',
    monto: '0.12 ETH',
    fecha: '2025-05-01',
    estado: 'Pendiente',
  },
  {
    wallet: '0x88fE...D4B2',
    tipo: 'Compra',
    descripcion: 'Compra de NFT Marketplace',
    monto: '0.65 ETH',
    fecha: '2025-04-30',
    estado: 'Completada',
  },
  {
    wallet: '0xB5Ca...32Ef',
    tipo: 'Pago',
    descripcion: 'Pago de hosting mensual',
    monto: '0.08 ETH',
    fecha: '2025-04-29',
    estado: 'Completada',
  },
  {
    wallet: '0xE001...17De',
    tipo: 'Contrato',
    descripcion: 'Actualización de Smart Contract',
    monto: '0.15 ETH',
    fecha: '2025-04-28',
    estado: 'Fallida',
  },
  {
    wallet: '0x79aB...00FF',
    tipo: 'Compra',
    descripcion: 'Compra de tokens ERC-20',
    monto: '0.30 ETH',
    fecha: '2025-04-27',
    estado: 'Completada',
  },
  {
    wallet: '0xAA11...789c',
    tipo: 'Pago',
    descripcion: 'Pago de servicio de consultoría',
    monto: '0.22 ETH',
    fecha: '2025-04-26',
    estado: 'Completada',
  },
  {
    wallet: '0xC9D2...b001',
    tipo: 'Contrato',
    descripcion: 'Despliegue de contrato de staking',
    monto: '0.14 ETH',
    fecha: '2025-04-25',
    estado: 'Pendiente',
  },
];

const estadoEstilo = {
  Completada: 'text-green-600 bg-green-100',
  Pendiente: 'text-yellow-600 bg-yellow-100',
  Fallida: 'text-red-600 bg-red-100',
};

const Transacciones = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-blue-600 text-lg">🕒</span>
        Últimas Transacciones
      </h2>
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
    </section>
  );
};

export default Transacciones;
