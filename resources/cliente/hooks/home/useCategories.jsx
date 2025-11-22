import { useEffect, useState } from "react";
import { categories } from "../../services/home/categories";

export function useCategories() {
  const [cate, setCategories] = useState([])
  const [page, setPage] = useState(0)
  const pageSize = 5

  useEffect(() => {
    categories().then(data => setCategories(data))
  }, [])

  const maxPage = Math.ceil(cate.length / pageSize)

  const currentCategories = cate.slice(page * pageSize, (page + 1) * pageSize)

  const goTo = (index) => {
    if(index >= 0 && index <= maxPage) {
      setPage(index)
    }
  }

  return { currentCategories, page, maxPage, goTo }
}