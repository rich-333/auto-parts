import { useEffect, useState } from "react";
import { serviceProducts } from "../../services/shop/serviceProducts";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 9

  useEffect(() => {
    serviceProducts().then((data) => setProducts(data))
  }, [])

  const maxPage = Math.ceil(products.length / pageSize)

  const currentProducts = products.slice(page * pageSize, (page + 1) * pageSize)

  const goTo = (index) => {
    if(index >= 0 && index <= maxPage) {
      setPage(index)
    }
  }

  return { currentProducts, page, maxPage, goTo }
}