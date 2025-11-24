import { Category } from "../../components/shop/filters/category"
import { Price } from "../../components/shop/filters/price"
import { Brand } from "../../components/shop/filters/brand"
import { SearchBar } from "../../../../admin/views/components/ui/search/search"
import { useBrands } from "../../../hooks/shop/useBrands"
import { useCategories } from "../../../hooks/shop/useCategories"

export function Filters({ filters, setFilters }) {
  const { brands } = useBrands();
  const { categories } = useCategories();

  return (
    <section>
      <form action="">
        <div className=" mb-8">
          <SearchBar value={filters.search} onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}/>
        </div>
        <Category categories={categories} filters={filters} setFilters={setFilters}/>
        <Price filters={filters} setFilters={setFilters}/>
        <Brand brands={brands} filters={filters} setFilters={setFilters}/>
      </form>
    </section>
  )
}