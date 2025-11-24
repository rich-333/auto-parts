export function Brand({ brands = [], filters, setFilters }) {

  const changeBrand = (brand) => {
    setFilters(prev => ({ ...prev, brand }))
  }

  return(
    <div className="flex flex-col gap-2">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">Marcas</h2>
        <label className="flex items-center gap-1 font-medium text-sm md:text-base cursor-pointer">
          <input
            type="radio"
            name="brand"
            value=""
            checked={filters.brand === ""} 
            onChange={() => changeBrand("")}
          />
          Todas las marcas
        </label>

        {
          brands.map((brand) => (
            <label key={brand.id_marca} className=" flex items-center gap-1 font-medium text-sm md:text-base cursor-pointer">
              <input 
                className=" shadow-xs cursor-pointer" 
                type="radio" 
                name="brand"
                checked={filters.brand == brand.nombre} 
                value={ brand.nombre }
                onChange={() => changeBrand(brand.nombre)}
              />
              { brand.nombre }
            </label>
          ))
        }
    </div>
  )
}