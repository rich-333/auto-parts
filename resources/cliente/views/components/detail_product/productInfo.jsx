import { Phone } from "./info/phone";
import { ServiceOrders } from "./info/serviceOrders";

export function ProductInfo({ product }) {
  const {
    marca,
    categoria,
    precio,
    descuento
  } = product;

  const des = descuento?.find(d => d.activo === 1);

  const precioFinal = des
    ? (precio - (precio * (des.valor / 100))).toFixed(2)
    : null;

  const formatMoney = (num) =>
    new Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB"
    }).format(num);

  return (
  <section>
    <p className=" font-normal">{categoria.descripcion}</p>
    <div className=" my-5 flex gap-2.5 items-end">
      {
        des ? (
          <>
            <span className=" text-price font-bold text-2xl">{formatMoney(precioFinal)}</span>
            <span className=" text-txt-footer font-medium line-through">{formatMoney(precio)}</span>
          </>
        ) : (
          <span className="text-gray-900 font-bold text-2xl">{formatMoney(precio)}</span>
        )
      }
    </div>

    <div>
        <form id="addToCartForm" className=" flex gap-1.5" action="" method="">
          {/*<x-quantity :cantidad="$cartItem->cantidad ?? 1" :idCarrito="$cartItem->id_carrito ?? null"/>*/}
          <input type="hidden" name="cantidad" id="cantidadInput" value="{{ $cartItem->cantidad ?? 1 }}" data-id="new"/>
          <button
              type="submit"
              className="text-white bg-discount rounded-lg w-full font-semibold py-3 
                      transition-all duration-200 ease-in-out shadow-md
                      hover:bg-discount/90 hover:shadow-lg
                      active:bg-discount/80 active:scale-[0.98]
                      focus:outline-none focus:ring-2 focus:ring-discount/50 focus:ring-offset-1 cursor-pointer">
            Agregar al carrito
          </button>
        </form>
    </div>

    <div className=" my-5">
        <form id="favoritoForm-{{ $producto->id_producto }}" data-id="{{ $producto->id_producto }}" action="" method="">
          <button
            type="submit" 
            className="flex gap-2.5 items-center font-medium cursor-pointer text-gray-700
                  transition-all duration-200 ease-in-out
                  hover:text-red-600 hover:scale-[1.03]
                  active:scale-[0.97]
                  focus:outline-none focus:ring-1 focus:ring-red-400/50 rounded-md p-1">
            <svg className="transition-colors duration-200 group-hover:fill-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C11.7143 21 11.5238 20.9016 11.2381 20.7049C9.61905 19.918 8.19048 18.9344 6.85714 17.8525C4.47619 15.8852 2 12.8361 2 8.70492C2 5.55738 4.47619 3.09836 7.42857 3.09836C9.2381 3.09836 10.9524 4.08197 12 5.45902C13.0476 3.98361 14.6667 3 16.5714 3C19.619 3 22 5.55738 22 8.60656C22 12.7377 19.5238 15.8852 17.1429 17.7541C15.9048 18.8361 14.4762 19.7213 12.9524 20.5082H12.8571C12.2857 21 12.0952 21 12 21Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Agregar a favoritos</p> 
          </button>
        </form>
    </div>

    <ServiceOrders />

    <Phone />

    <hr className=" border-black/20 mb-6" />

    <div className=" flex flex-col gap-2">
      <p className=" text-gray-600 font-normal">Categoria: <span className="text-black font-semibold">{ categoria.nombre }</span></p>
      <p className=" text-gray-600 font-normal">Marca: <span className="text-black font-semibold">{ marca.nombre }</span></p>
    </div>

  </section>
  )
}