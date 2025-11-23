import { Category } from "../../components/shop/filters/category"
import { Price } from "../../components/shop/filters/price"
import { Brand } from "../../components/shop/filters/brand"
import { SearchBar } from "../../../../admin/views/components/ui/search/search"
import { useBrands } from "../../../hooks/shop/useBrands"
import { useCategories } from "../../../hooks/shop/useCategories"

export function Filters() {
  const { brands } = useBrands();
  const { categories } = useCategories();

  return (
    <section>
      <form action="">
        <div className=" mb-8">
          <SearchBar/>
        </div>
        <Category categories={categories}/>
        <Price/>
        <Brand brands={brands}/>
      </form>
    </section>
  )
}