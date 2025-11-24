import { useEffect, useState } from "react";
import { serviceRelatedProducts } from "../../services/details_product/serviceRelatedProducts";

export function useRelatedProducts(id) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    serviceRelatedProducts(id).then(data => {
      setRelated(data);
      setLoading(false);
    });

  }, [id]);

  return { related, loading };
}
