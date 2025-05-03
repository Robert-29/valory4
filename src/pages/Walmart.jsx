import { useConnectWallet, useWallets } from '@privy-io/react-auth';

const Menu = () => {
  const { connectWallet } = useConnectWallet();
  const { wallets } = useWallets();

  const wallet = wallets?.[0];
  const direccion = wallet?.address;

  // Función para recortar la dirección
  const acortarDireccion = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <header className="flex justify-between items-center bg-white px-6 py-7 shadow-sm">
      <div className="flex items-center space-x-6">
        <h1 className="text-blue-600 font-bold text-2xl">VALORY4</h1>
        <div className="flex text-2xl items-center text-gray-700 hover:text-gray-900 cursor-pointer">
          Historial
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {direccion ? (
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl font-mono text-sm">
            {acortarDireccion(direccion)}
          </span>
        ) : (
          <button
            onClick={async () => {
              try {
                await connectWallet();
              } catch (err) {
                console.error("Error al conectar wallet:", err);
              }
            }}
            className="text-white bg-blue-600 px-4 py-2 text-sm font-bold cursor-pointer rounded-2xl"
          >
            Conectar Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Menu;
