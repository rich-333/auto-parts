import sty from "../../../../css/home/ContactImg.module.css"
import { ButtonPrimary } from "../../ui/buttons/buttonPrimary"

export function Image() {
  return(
    <div className={`${sty.bg__contact} bg-center bg-no-repeat bg-cover w-full h-148 rounded-lg flex flex-col gap-5 p-10`}>
      <p className=" font-semibold text-sm text-white/50">Componentes Inteligentes Unidad Inteligente</p>
      <h3 className=" font-extrabold text-6xl text-white w-96 leading-16">Precisión Piezas para Rendimiento Máximo</h3>
      <p className=" text-white/85 font-normal w-96">Cada componente está fabricado con cuidado para un ajuste perfecto y una experiencia de conducción suave.</p>
      <ButtonPrimary link="/tienda" styles="text-black bg-white w-36 h-11 rounded-full hover:from-white hover:to-gray-200 text-xs lg:text-base font-semibold" text="Comprar ahora"/>
    </div>
  )
}

