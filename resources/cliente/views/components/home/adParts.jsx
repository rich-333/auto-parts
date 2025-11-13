import { ButtonPrimary } from "../ui/buttons/buttonPrimary"
import sty from "../../../css/home/Ads.module.css"

export function AdParts() {
  return(
    <article className={`${sty.bg__parts} bg-add2 bg-no-repeat bg-center bg-cover w-full h-69 flex flex-col justify-center gap-3 px-7 rounded-lg`}>
      <p className="text-black/40 uppercase font-semibold text-xs md:text-sm">Precision en cada parte</p>
      <h3 className="text-black font-extrabold text-3xl md:text-4xl w-95">Repuestos confiables para cada viaje</h3>
      <p className="text-black text-sm font-normal mb-3">Cada pieza esta diseñada a tu medida</p>
      <ButtonPrimary styles="text-black bg-white hover:from-white hover:to-gray-200" text="Comprar ahora"/>
    </article>
  )
}