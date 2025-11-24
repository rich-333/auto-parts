import { LayoutCliente } from "../layouts/layoutCliente"
import { Details } from "../sections/detail_product/details"
import { Services } from "../sections/detail_product/services"
import { Related } from "../sections/detail_product/related"
import { useProductById } from "../../hooks/details_product/useProductById"

export function DetailsProduct() {
  const { product, loading } = useProductById();

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto mb-16">
        <Details product={product}/>
        <Services/>
        <Related product={product}/>
      </main>
    </LayoutCliente>
  )
}