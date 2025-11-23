import { useEffect, useState } from "react";
import { serviceCategories } from "../../services/shop/serviceCategories";
import { data } from "react-router-dom";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    serviceCategories().then((data) => setCategories(data));
  }, [])

  return { categories }
}