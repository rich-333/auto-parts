import styles from "../../../css/home/BestDeals.module.css"

export function BestDeals() {
  return(
    <div className={`${styles.bg__hero}  bg-hero bg-cover bg-center bg-no-repeat h-[620px]`}>
      <div className=" w-full h-full flex flex-col justify-center items-center px-5">
        <p className=" text-sm lg:text-lg text-white/70 font-normal">Encuentra las mejores ofertas</p>
        <h2 className=" text-center w-2xl text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-18">Encuentra las mejores piezas para tu vehículo</h2>
        <p className=" font-normal opacity-75 lg:text-xl text-white mb-6">Calidad y confianza en cada compra</p>
        <a 
          href="" 
          className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-semibold
                shadow-md hover:scale-105 hover:bg-linear-to-r hover:from-white hover:to-gray-200
                active:scale-95 active:shadow-inner
                transition-all duration-300 ease-out"
        >
          Explorar Productos
        </a>
      </div>
    </div> 
  )
}