const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fbfd]">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Iniciar Sesión</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
  
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
              <span className="text-gray-400 mr-2">
                <i className="fas fa-user" />
              </span>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>
  
          {/* Contraseña */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
              <span className="text-gray-400 mr-2">
                <i className="fas fa-lock" />
              </span>
              <input
                type="password"
                className="w-full bg-transparent outline-none text-sm"
                placeholder="******"
              />
              <span className="text-gray-400 cursor-pointer ml-2">
                <i className="fas fa-eye" />
              </span>
            </div>
          </div>
  
          {/* Enlace Olvidaste tu contraseña */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
  
          {/* Botón Iniciar Sesión */}
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 mb-6 flex justify-center items-center gap-2">
            <i className="fas fa-sign-in-alt" />
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;
  