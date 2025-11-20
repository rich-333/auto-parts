import { Link } from "react-router-dom"

export function Header() {
  return(
    <>
      <header className="flex justify-between items-center">
        <h4 className="font-semibold text-lg md:text-2xl">Más Vendidos</h4>
        <Link to="/tienda" className="text-sm md:text-base font-semibold text-discount hover:underline hover:scale-105 transition-all duration-200 ease-out">Ver Todo</Link>
      </header>

      <div className="border-b-2 border-carousel-border my-5"></div>
    </>
  )
}