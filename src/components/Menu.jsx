import { useConnectWallet } from '@privy-io/react-auth';
import { usePrivy } from '@privy-io/react-auth';

const Menu = () => {
  const { user, login, logout } = usePrivy();

  const handleConnect = async () => {
    try {
      await connectWallet();
      console.log("Wallet conectada exitosamente");
    } catch (error) {
      console.error("Error al conectar wallet:", error);
    }
  };

  return (
    <header className="flex justify-between items-center bg-white px-6 py-7 shadow-sm ">
      <div className="flex items-center space-x-6">
        <h1 className="text-blue-600 font-bold text-2xl">VALORY4</h1>
        <div className="flex text-2xl items-center text-gray-700 hover:text-gray-900 cursor-pointer">
          Historial
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      
      <div>
        <button onClick={login} className="text-blue-500 font-semibold cursor-pointer">
          {user ? "" : "Conectar Wallet :D"}
        </button>

        {/* Mostrar la dirección de la wallet si está conectada */}
        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-mono mt-4">
          {user?.wallet?.address ? `Wallet: ${user.wallet.address}` : "No conectado"}
        </div>

        {/* Botón para cerrar sesión y cambiar de wallet */}
        {user && (
          <button onClick={logout} className="bg-white-500 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all ease-in-out duration-300 mt-4">
            Cerrar sesión / Cambiar Wallet
          </button>
        )}

      </div>
    </header>
  );
};

export default Menu;
