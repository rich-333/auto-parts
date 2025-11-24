import { useEffect, useState } from "react";
import { serviceProductById } from "../../services/details_product/serviceProductById";
import { useParams } from "react-router-dom";

export function useProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    serviceProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return { product, loading };
}
