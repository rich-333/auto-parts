import { Category } from "../../components/home/category"
import { useCategories } from "../../../hooks/home/useCategories"
import { Navigation } from "../../components/home/bestSellers/navigation"

export function Categories() {
  const { currentCategories, page, maxPage, goTo } = useCategories()

  return(
    <>
      <section className="flex gap-2.5">
        {
          currentCategories.map(category => (
            <Category key={category.id_categoria} path={category.url_imagen} category={category.nombre} quantity={category.productos_count}/>
          ))
        }
      </section>

      <Navigation page={page} maxPage={maxPage} goTo={goTo}/>
    </>
  )
}