import { LayoutCliente } from "../layouts/layoutCliente"
import { Filters } from "../sections/shop/filters"
import { Products } from "../sections/shop/products"
import { useState } from "react";

export function Shop() {
  const [filters, setFilters] = useState({
    search: "",
    categories: [],
    brand: "",
    price: 5000,
  });

  return(
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        <h1 className=" font-semibold text-4xl md:text-5xl text-center py-5 ">Productos</h1>
        <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-28">
          <Filters filters={filters} setFilters={setFilters}/>
          <Products filters={filters}/>
        </section>
      </main>
    </LayoutCliente>
  )
}