export function CardHeader({ nombre = "", precDes = 0, precSinDesc = 0 , description = ""}) {
  return (
    <header className="flex flex-col gap-2 mb-3">
      <div className=" flex gap-2">
        <img src="images/components/clients/product/star.svg" alt="Estrella"/>
        <span className="text-sm font-medium">N/A</span>
      </div>
      <h3 className=" font-medium text-sm h-8 overflow-hidden line-clamp-2">{nombre}</h3>
      <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-end">
          {
            precDes ? (
              <>
                <span className=" text-price font-bold text-2xl">{precDes}</span>
                <span className=" text-txt-footer font-medium line-through">{precSinDesc}</span>
              </>
            ) : (
              <span className="text-gray-900 font-bold text-2xl">{precSinDesc}</span>
            )
          }
        </div>

        <form action="{{ route('carrito.add', $producto->id_producto) }}" method="POST">
          <button type="submit" className="bg-discount rounded-lg p-2 transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md cursor-pointer active:outline-4 outline-discount active:outline-offset-2">
            <img src="images/icons/header/cart.svg" alt=""/>
          </button>
        </form>

      </div>
      <div className=" border border-carousel-border w-full"></div>
    </header>
  )
}