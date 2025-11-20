import { Discount } from "./dicount"
import { Link } from "react-router-dom"

export function CardProduct() {
  return(
    <article className=" w-60 h-112">

      <div className=" relative h-60">

        {
          /*
            @php
              $imagenPrincipal = $producto->imagenes->firstWhere('es_principal', true) ?? $producto->imagenes->first() ?? null;
            @endphp
          */
        }
        <img 
          className="w-full h-full object-cover rounded-lg border-carousel-border border-2" 
          src="images/components/clients/product/ejem.svg" 
          alt=" {{ $producto->nombre }} "
        />

          <p className=" absolute top-3 left-3 bg-discount w-10 h-6 rounded-sm text-center font-semibold text-xs md:text-sm text-white">
            30
          </p>
          <Discount/>
        
          <form id="favoritoForm-{{ $producto->id_producto }}" data-id="{{ $producto->id_producto }}" action="{{ route('favorito.add', $producto->id_producto) }}" method="POST">
            <button
              type="submit"
              className="absolute top-3 right-3 p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-white/90
                    hover:bg-discount hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path className="stroke-black group-hover:stroke-white transition-all duration-200" d="M12 21C11.7143 21 11.5238 20.9016 11.2381 20.7049C9.61905 19.918 8.19048 18.9344 6.85714 17.8525C4.47619 15.8852 2 12.8361 2 8.70492C2 5.55738 4.47619 3.09836 7.42857 3.09836C9.2381 3.09836 10.9524 4.08197 12 5.45902C13.0476 3.98361 14.6667 3 16.5714 3C19.619 3 22 5.55738 22 8.60656C22 12.7377 19.5238 15.8852 17.1429 17.7541C15.9048 18.8361 14.4762 19.7213 12.9524 20.5082H12.8571C12.2857 21 12.0952 21 12 21Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>

          <a href="{{ route('register.form') }}" 
            className="absolute top-3 right-3 p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-white/90
                    hover:bg-discount hover:scale-110 active:scale-95 group cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path className="stroke-black group-hover:stroke-white transition-all duration-200" d="M12 21C11.7143 21 11.5238 20.9016 11.2381 20.7049C9.61905 19.918 8.19048 18.9344 6.85714 17.8525C4.47619 15.8852 2 12.8361 2 8.70492C2 5.55738 4.47619 3.09836 7.42857 3.09836C9.2381 3.09836 10.9524 4.08197 12 5.45902C13.0476 3.98361 14.6667 3 16.5714 3C19.619 3 22 5.55738 22 8.60656C22 12.7377 19.5238 15.8852 17.1429 17.7541C15.9048 18.8361 14.4762 19.7213 12.9524 20.5082H12.8571C12.2857 21 12.0952 21 12 21Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        <Link
          to="/producto/1"
          className="absolute top-12 right-3 p-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm
                hover:bg-discount hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <svg className="stroke-black group-hover:stroke-white transition-all duration-200 icon icon-tabler icons-tabler-outline icon-tabler-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path  stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>
        </Link>

      </div>

      <div className="py-5">
        <header className="flex flex-col gap-3 mb-3">
          <div className=" flex gap-2">
            <img src="images/components/clients/product/star.svg" alt="Estrella"/>
            <span className="text-sm font-medium">N/A</span>
          </div>
          <h3 className=" font-medium text-sm h-10 overflow-hidden line-clamp-2">Producto 1</h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-end">
              <span className=" text-price font-bold text-2xl">50 Bs.</span>

              <span className=" text-txt-footer font-medium line-through">100 Bs.</span>
            </div>

              <form action="{{ route('carrito.add', $producto->id_producto) }}" method="POST">
                <button type="submit" className="bg-discount rounded-lg p-2 transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md cursor-pointer active:outline-4 outline-discount active:outline-offset-2">
                  <img src="images/icons/header/cart.svg" alt=""/>
                </button>
              </form>

          </div>
          <div className=" border border-carousel-border w-full"></div>
        </header>

        <footer className="flex flex-col gap-2">
          <div className=" border-2 border-red-500"></div>
          <div className="flex justify-between text-xs font-normal">
            <p>Disponible: <span className=" font-semibold">27</span></p>
            <p>Vendido: <span className=" font-semibold">29</span></p>
          </div>
        </footer>
      </div>

    </article>

  )
}