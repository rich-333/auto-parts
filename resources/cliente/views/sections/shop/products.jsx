import { Header } from "../../components/shop/products/header"
import { ListProducts } from "../../components/shop/products/listProducts"
import { Pagination } from "../../components/ui/pagination/pagination"
import { useProducts } from "../../../hooks/shop/useProducts"

export function Products({ filters }) {
  const { currentProducts, page, maxPage, goTo } = useProducts(filters)

  return (
    <section>
      <Header/>
      <ListProducts products={currentProducts}/>
      <div className="mt-10">
        <Pagination page={page} maxPage={maxPage} goTo={goTo}/>
      </div>
    </section>
  )
}