import { LayoutAdmin } from "../../layouts/layoutAdmin"
import { CategoryTable } from "../../sections/categories/categoryTable"
import { SectionSearch } from "../../components/ui/search/sectionSearch"

export function Categories() {
  return(
    <LayoutAdmin>
      <SectionSearch title="Lista de categorias"/>
      <CategoryTable/>
    </LayoutAdmin>
  )
}