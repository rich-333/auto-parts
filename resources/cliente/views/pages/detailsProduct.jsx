import { LayoutCliente } from "../layouts/layoutCliente"
import { Details } from "../sections/detail_product/details"
import { Services } from "../sections/detail_product/services"
import { Related } from "../sections/detail_product/related"

export function DetailsProduct() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto mb-16">
        <Details/>
        <Services/>
        <Related/>
      </main>
    </LayoutCliente>
  )
}