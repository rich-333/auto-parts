export function LoginForm() {
  return (
    <form method="" action="" className="space-y-4">

      <div>
        <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" placeholder="Ingrese su dirección de correo electrónico" required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
      </div>

      <div>
        <label for="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
        <div className="relative">
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
        </div>
      </div>

      <button type="submit" className="w-full bg-discount cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 font-bold">
        Iniciar sesión
      </button>

      <div className="text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">Olvidaste tu contraseña?</a>
      </div>
    </form>
  )
}