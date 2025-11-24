import { ButtonFavorite } from "../buttons/buttonFavorite"
import { CardFooter } from "./cardFooter"
import { CardHeader } from "./cardHeader"
import { Discount } from "./dicount"
import { Link } from "react-router-dom"

export function CardProduct({ product = [] }) {
  const mainImage = product.imagenes?.[0]?.url_imagen
  ? `http://localhost:8000/${product.imagenes[0].url_imagen}`
  : 'images/components/clients/product/ejem.svg';

  const descuento = Number(product.descuento?.[0]?.valor ?? 0);

  const precio = Number(product.precio);
  const precioDescuento = precio - (product.precio * (descuento / 100));

  const precioFormateado = precio.toFixed(2);
  const precioDescuentoFormateado = precioDescuento.toFixed(2);

  return(
    <article className=" w-60 h-112">

      <div className=" relative h-60">

        <img 
          className="w-full h-full object-cover rounded-lg border-carousel-border border-2" 
          src={ mainImage} 
          alt={ product.nombre }
        />
        {
          descuento > 0 && (
            <Discount descuento={descuento}/>
          )
        }
        
        <ButtonFavorite/>

        <Link
          to={`/producto/${product.id_producto}`}
          className="absolute top-12 right-3 p-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm
                hover:bg-discount hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <svg className="stroke-black group-hover:stroke-white transition-all duration-200 icon icon-tabler icons-tabler-outline icon-tabler-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path  stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>
        </Link>

      </div>

      <div className="py-5">
        <CardHeader nombre={product.nombre} precSinDesc={precioFormateado} precDes={precioDescuentoFormateado} description={product.descripcion}/>

        <CardFooter/>
      </div>

    </article>

  )
}