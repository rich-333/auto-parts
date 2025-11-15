import { LayoutAdmin } from "../layouts/layoutAdmin"
import { CategoryTable } from "../sections/categories/categoryTable"

export function Categories() {
  return(
    <LayoutAdmin>
      <CategoryTable/>
    </LayoutAdmin>
  )
}