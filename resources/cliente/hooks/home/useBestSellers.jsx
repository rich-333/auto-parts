import { useEffect, useState } from "react";
import { getBestSellerProducts } from "../../services/home/bestSellers";

export function useBestSellers() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    getBestSellerProducts().then(data => setProducts(data));
  }, []);

  const maxPage = Math.ceil(products.length / pageSize);

  const currentProducts = products.slice(page * pageSize, (page + 1) * pageSize);

  const goTo = (index) => {
    if (index >= 0 && index < maxPage) {
      setPage(index);
    }
  };

  return { currentProducts, page, maxPage, goTo };
}
