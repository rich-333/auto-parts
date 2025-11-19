import { Trash2 } from "lucide-react"
import styleTable from "../../../css/favorite/Table.module.css"
import { ButtonDeleteAll } from "../../components/ui/buttons/buttonDeleteAll"

export function CartTable() {
  return (
    <section>
      <table className=" w-full rounded-2xl overflow-hidden">
        <thead className=" border-b-2 border-carousel-border bg-discount/50">
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>

            <tr className="hover:bg-slate-200 transition-colors duration-150 cursor-pointer">
              <td className=" flex items-center gap-x-5">
                  <img  className="w-20 h-20 border-2 border-carousel-border rounded-lg transition-transform duration-300 hover:scale-105" src="images\components\clients\product\ejem.svg" alt="" />
                
                <p className=" font-medium">Producto Nombre</p>
              </td>

              <td className=" font-normal" data-precio="{{ $precioFinal }}">
                {
                  /*
                  <x-price_new
                      priceNew="{{ number_format($precioFinal, 2) }}"
                    />
                  @endif

                  @if($cart->producto->precio != $precioFinal)
                    <x-price_base
                      priceBase="{{ number_format($cart->producto->precio, 2) }}"
                    />
                  @else
                    {{ $cart->producto->precio }}
                  @endif*/
                }
              </td>
              <td>
                {
                  //<x-quantity :cantidad="$cart->cantidad" :idCarrito="$cart->id_carrito" :precio="$precioFinal"/>
                }
              </td>
              <td className=" font-semibold">

                {
                 //number_format($cart->cantidad * $precioFinal, 2) 
                }
              </td>
              <td>
                <form>
                  <button 
                    type="submit"   
                    className="group rounded-full p-2 shadow-2xs 
                    cursor-pointer transition-all duration-200 hover:bg-red-500 hover:scale-110
                    active:scale-95 active:outline-4 outline-red-500 
                    active:outline-offset-2"
                  >
                    <Trash2 className="transition-colors duration-200 group-hover:text-white"/>
                  </button>
                </form>
              </td>
            </tr>
        </tbody>
      </table>

      <ButtonDeleteAll/>
    </section>
  )
}