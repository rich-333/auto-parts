import { ButtonPrimary } from "../ui/buttons/buttonPrimary"
import sty from "../../../css/home/Ads.module.css"

export function AdOffer() {
  return(
    <article className={`${sty.bg__offer} bg-no-repeat bg-center bg-cover w-full h-69 flex flex-col justify-center gap-3 px-7 rounded-lg`}>
      <p className="text-white/40 uppercase font-semibold text-xs md:text-sm">Ofertas refrescantes de primavera</p>
      <h3 className=" text-white font-extrabold text-3xl md:text-4xl w-88">Piezas que trabajan tan duro como tu</h3>
      <p className=" text-white text-sm font-normal mb-3">Sin desajustes, solo piezas exactas</p>
      <ButtonPrimary styles="text-black bg-white hover:from-white hover:to-gray-200" text="Comprar ahora"/>
    </article>
  )
}