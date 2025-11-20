import { ButtonPrimary } from "../ui/buttons/buttonPrimary"
import styles from "../../../css/home/BestDeals.module.css"

export function BestDeals() {
  return(
    <div className={`${styles.bg__hero}  bg-hero bg-cover bg-center bg-no-repeat h-[620px]`}>
      <div className=" w-full h-full flex flex-col justify-center items-center px-5">
        <p className=" text-sm lg:text-lg text-white/70 font-normal">Encuentra las mejores ofertas</p>
        <h2 className=" text-center w-2xl text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-18">Encuentra las mejores piezas para tu vehículo</h2>
        <p className=" font-normal opacity-75 lg:text-xl text-white mb-6">Calidad y confianza en cada compra</p>
        <ButtonPrimary text="Explorar Productos" link="/tienda" styles="bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-semibold hover:from-white hover:to-gray-200"/>
      </div>
    </div> 
  )
}