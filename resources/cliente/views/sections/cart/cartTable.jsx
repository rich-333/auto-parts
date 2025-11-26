import { Trash2 } from "lucide-react"
import styleTable from "../../../css/favorite/Table.module.css"
import { ButtonDeleteAll } from "../../components/ui/buttons/buttonDeleteAll"

export function CartTable({ cart, onDelete }) {
  return (
    <section>
      <table className="w-full rounded-2xl overflow-hidden">
        <thead className="border-b-2 border-carousel-border bg-discount/50">
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => {
            const producto = item.producto;
            const mainImage = producto.imagenes?.[0]?.url_imagen
              ? `http://localhost:8000/${producto.imagenes[0].url_imagen}`
              : '/images/components/clients/product/ejem.svg';
              
            return (
              <tr 
                key={item.id_carrito} 
                className="hover:bg-slate-200 transition-colors duration-150"
              >
                {/* Producto */}
                <td className="flex items-center gap-x-5">
                  <img 
                    className="w-20 h-20 border-2 border-carousel-border rounded-lg transition-transform duration-300 hover:scale-105" 
                    src={mainImage}
                    alt={item.producto?.nombre}
                  />
                  <p className="font-medium">{item.producto?.nombre}</p>
                </td>

                {/* Precio */}
                <td className="font-normal">
                  ${item.producto?.precio}
                </td>

                {/* Cantidad */}
                <td>{item.cantidad}</td>

                {/* Subtotal */}
                <td className="font-semibold">
                  ${(item.cantidad * item.producto?.precio).toFixed(2)}
                </td>

                {/* Eliminar */}
                <td>
                  <button
                    onClick={() => onDelete(item.id_carrito)}
                    className="group rounded-full p-2 shadow-2xs cursor-pointer transition-all duration-200 hover:bg-red-500 hover:scale-110 active:scale-95 active:outline-4 outline-red-500 active:outline-offset-2"
                  >
                    <Trash2 className="transition-colors duration-200 group-hover:text-white" />
                  </button>
                </td>
              </tr>
              )
          })}
        </tbody>
      </table>

      <ButtonDeleteAll/>
    </section>
  );
}