import { Trash2 } from "lucide-react"
import styleTable from "../../../css/favorite/Table.module.css"
import { ButtonDeleteAll } from "../../components/ui/buttons/buttonDeleteAll";

export function FavoriteTable({ favorites = [], onDelete }) {
  return (
    <section>
      <table className=" w-full rounded-2xl overflow-hidden">
        <thead className=" border-b-2 border-carousel-border bg-discount">
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Marca</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {favorites.map(fav => {
            const producto = fav.producto;
            const mainImage = producto.imagenes?.[0]?.url_imagen
              ? `http://localhost:8000/${producto.imagenes[0].url_imagen}`
              : '/images/components/clients/product/ejem.svg';

            return (
              <tr key={fav.id_favorito} className="hover:bg-slate-200 transition-colors duration-150 cursor-pointer">
                <td className="flex items-center gap-x-5">
                  <img className="w-20 h-20 border-2 border-carousel-border rounded-lg transition-transform duration-300 hover:scale-105" 
                      src={mainImage} 
                      alt={producto.nombre}  
                  />
                  <p className="font-medium">{producto.nombre}</p>
                </td>
                <td className="font-normal">{producto.precio ?? '-'}</td>
                <td>{producto.stock ?? '-'}</td>
                <td>{producto.marca.nombre ?? '-'}</td>
                <td>
                  <button 
                    onClick={() => onDelete(fav.id_favorito)}
                    className="group rounded-full p-2 shadow-2xs cursor-pointer transition-all 
                    duration-200 hover:bg-red-500 hover:scale-110 active:scale-95"
                  >
                    <Trash2 className="transition-colors duration-200 group-hover:text-white"/>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <ButtonDeleteAll/>
    </section>
  )
}