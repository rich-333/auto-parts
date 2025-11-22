import { CardProduct } from "../../ui/product/cardProduct"

export function List({ products = [] }) {

  return(
    <div id="bestseller-container" className="flex gap-5">
      {
        products.map(product => (
          <CardProduct key={product.id_producto} product={product}/>
        ))
      }
    </div>
  )
}