import { RelatedProducts } from "../../components/detail_product/relatedProducts"
import { useRelatedProducts } from "../../../hooks/details_product/useRelatedProducts"

export function Related({ product }) {
  const { related, loading } = useRelatedProducts(product.id_producto);

  if (loading) return <p>Cargando productos relacionados...</p>;
  if (related.length === 0) return <p>No hay productos relacionados</p>;

  return (
    <>
      <div>
        <h4 className=" text-lg font-medium">Productos relacionados</h4>
        <RelatedProducts products={related}/>
      </div>
    </>
  )
}