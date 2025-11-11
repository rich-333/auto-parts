import styles from "../../../css/home/Sales.module.css"
import { ButtonPrimary } from "../../components/ui/buttons/buttonPrimary"

export function Sales() {
  return(
    <section className="flex my-10">
  
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-10">
        {/*
        @forelse ($productosConDescuento as $producto)
          <x-product :producto="$producto" />
        @empty
          <p>No hay productos con descuento disponibles.</p>
        @endforelse*/
        }
      </div>


      <div className={`${styles.bg__sales} bg-cover bg-center bg-no-repeat w-[299px] h-[936px] mx-3 text-center text-black pt-10`}>
        <p className=" text-black/50 text-xs font-semibold mb-2">PIEZAS DE ALTA CALIDAD</p>
        <h3 className=" font-extrabold text-2xl px-7">Obtenga mas millas por menos</h3>
        <p className=" text-sm font-normal my-3">Buscar por marca.</p>
        <ButtonPrimary text="Comprar ahora" styles="text-white bg-discount hover:from-discount hover:to-discount/10 mx-auto"/>
      </div>


      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-10">
        {/*
        @forelse ($productosConDescuento as $producto)
          <x-product :producto="$producto" />
        @empty
          <p>No hay productos con descuento disponibles.</p>
        @endforelse
        */}
      </div>

    </section>
  )
}