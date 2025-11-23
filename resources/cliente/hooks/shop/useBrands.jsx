import { useEffect, useState } from "react";
import { serviceBrands } from "../../services/shop/serviceBrands";
import { data } from "react-router-dom";

export function useBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    serviceBrands().then(data => setBrands(data))
  }, [])

  return { brands }
}