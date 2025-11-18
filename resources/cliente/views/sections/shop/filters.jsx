import { Category } from "../../components/shop/filters/category"
import { Price } from "../../components/shop/filters/price"
import { Brand } from "../../components/shop/filters/brand"
import { SearchBar } from "../../../../admin/views/components/ui/search/search"

export function Filters() {
  return (
    <section>
      <form action="">
        <div className=" mb-8">
          <SearchBar/>
        </div>
        <Category/>
        <Price/>
        <Brand/>
      </form>
    </section>
  )
}