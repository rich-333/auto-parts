import { Header } from "../../components/shop/products/header"
import { ListProducts } from "../../components/shop/products/listProducts"
import { Pagination } from "../../components/ui/pagination/pagination"

export function Products() {
  return (
    <section>
      <Header/>
      <ListProducts/>
      <div className="mt-10">
        <Pagination/>
      </div>
    </section>
  )
}