import { useEffect, useState } from "react"
import { serviceProducts } from "../../services/shop/serviceProducts"

export function useProducts(filters) {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])

  const [page, setPage] = useState(0)
  const pageSize = 9

  useEffect(() => {
    serviceProducts().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    let result = products

    if (filters?.search) {
      result = result.filter(p =>
        p.nombre.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (filters?.categories?.length > 0) {
      result = result.filter(p =>
        filters.categories.includes(p.id_categoria)
      )
    }

    if (filters?.brand) {
      result = result.filter(p =>
        p.marca?.nombre?.toLowerCase() === filters.brand.toLowerCase()
      )
    }

    if (filters?.price !== undefined) {
      result = result.filter(p => p.precio <= filters.price)
    }

    setFiltered(result)
    setPage(0)
  }, [products, filters])

  const maxPage = Math.ceil(filtered.length / pageSize) - 1

  const currentProducts = filtered.slice(
    page * pageSize,
    (page + 1) * pageSize
  )

  const goTo = (index) => {
    if (index >= 0 && index <= maxPage) {
      setPage(index)
    }
  }

  return { currentProducts, page, maxPage, goTo }
}