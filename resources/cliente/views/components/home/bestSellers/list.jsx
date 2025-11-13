import { CardProduct } from "../../ui/product/cardProduct"

export function List() {
  return(
    <div id="bestseller-container" className="flex gap-5">
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </div>
  )
}