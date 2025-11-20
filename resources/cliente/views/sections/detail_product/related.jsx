import { RelatedProducts } from "../../components/detail_product/relatedProducts"

export function Related() {
  return (
    <>
      <div>
        <h4 className=" text-lg font-medium">Productos relacionados</h4>
        <RelatedProducts />
      </div>
    </>
  )
}