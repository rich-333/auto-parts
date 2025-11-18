import { CardProduct } from "../../ui/product/cardProduct"

export function ListProducts() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-18 gap-y-10">
      <CardProduct/>
      <p>No hay productos dentro del catalogo</p>
    </div>
  )
}