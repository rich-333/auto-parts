import { ButtonCart } from "../buttons/buttonCart";

export function CardHeader({ nombre = "", precDes = 0, precSinDesc = 0 , description = "", productId}) {

  return (
    <header className="flex flex-col gap-2 mb-3">
      <div className=" flex gap-2">
        <img src="/images/components/clients/product/star.svg" alt="Estrella"/>
        <span className="text-sm font-medium">N/A</span>
      </div>
      <h3 className=" font-medium text-sm h-8 overflow-hidden line-clamp-2">{nombre}</h3>
      <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-end">
          {
            precDes ? (
              <>
                <span className=" text-price font-bold text-2xl">Bs {precDes}</span>
                <span className=" text-txt-footer font-medium line-through">Bs {precSinDesc}</span>
              </>
            ) : (
              <span className="text-gray-900 font-bold text-2xl">Bs {precSinDesc}</span>
            )
          }
        </div>

        <ButtonCart productId={productId}/>

      </div>
      <div className=" border border-carousel-border w-full"></div>
    </header>
  )
}