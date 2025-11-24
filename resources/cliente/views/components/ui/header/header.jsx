import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className=" bg-heading text-white max-h-28 sticky top-0 z-40">
      <div className=" max-w-8xl flex justify-between items-center w-7xl mx-auto">

        <Link to="/" aria-label="Ir al inicio" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
          <img src="/images/logos/LogoTurboParts.png" alt="Turbo Parts" className="w-20 h-28"/>
        </Link>
        <nav aria-label="Menú principal">
          <ul className="flex gap-4 font-semibold">
            <li>
              <NavLink 
                to="/" 
                className={ ({ isActive }) => 
                  `relative ${isActive ? 'text-red-500 border-b-2' : 
                  'hover:shadow-2xl hover:shadow-black hover:text-red-500 transition-colors duration-200 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300'}` } 
                  >
                  Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tienda" 
                className={ ({ isActive }) => 
                  `relative ${isActive ? 'text-red-500 border-b-2' : 
                  'hover:shadow-2xl hover:shadow-black hover:text-red-500 transition-colors duration-200 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300'}` } 
                  >
                  Productos
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1.5 items-center">
            <Link to="/login" aria-label="Ir a iniciar sesión" className="group bg-icons border border-border-icons rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 hover:bg-icons/95 transition-all duration-200">
              <img className="w-6 h-6 group-hover:brightness-125 transition" src="/images/icons/header/profile.svg" alt="" aria-hidden="true"/>
            </Link>
            {
            /*<div>
              @if(Auth::check())
                <p className=" text-xs font-normal opacity-75">{{ Auth::user()->nombre }}</p>
                <form action="{{ route('logout') }}" method="POST">
                  @csrf
                  <button type="submit" className="text-xs font-semibold cursor-pointer hover:underline">Cerar Sesion</button>
                </form>
              @else
                <a href="{{ route('register.form') }}" className=" block text-xs font-normal opacity-75">Registrarse</a>
                <span className="text-xs font-semibold">Cuenta</span>
              @endif
            </div>*/
            }
          </div>
          <Link to="/favoritos" aria-label="Ver favoritos" className="group bg-icons border border-border-icons rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 hover:bg-icons/95 transition-all duration-200 relative">
            <img className=" w-5 group-hover:brightness-125 transition" src="/images/icons/header/favorite.svg" alt="" aria-hidden="true"/> 
          </Link>
          <Link to="/carrito" aria-label="Ver carrito de compras" className="group bg-icons border border-border-icons rounded-full w-10 h-10 flex justify-center items-center hover:scale-115 hover:bg-icons/95 transition-all duration-200 relative">
            <img className=" w-5 group-hover:brightness-125 transition" src="/images/icons/header/cart.svg" alt="" aria-hidden="true"/>
          </Link>
        </div>
      </div>
    </header>
  )
}