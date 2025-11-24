import { CardProduct } from "../ui/product/cardProduct"

export function RelatedProducts( { products = [] } ) {
  return (
    <section className=" mt-5">
      <div className=" flex gap-8">
        {
          products.map(product => (
            <CardProduct key={product.id_producto ?? 0} product={product}/>
          ))
        }
      </div>
    </section>
  )
}