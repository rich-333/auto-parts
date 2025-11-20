import { CardProduct } from "../ui/product/cardProduct"

export function RelatedProducts() {
  return (
    <section className=" mt-5">
      <div className=" flex gap-8">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  )
}