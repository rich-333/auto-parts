import styleFilter from "../../../../css/shop/Price.module.css"

export function Price({ filters, setFilters }) {
  return(
    <div className="flex flex-col gap-2 mb-6">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">Filtrar por precio</h2>
      <div>
        <input
          className={`${styleFilter.range__minimal}`} 
          type="range" 
          min="0" 
          max="5000" 
          value={filters.price}
          onChange={(e) => setFilters(prev => ({ ...prev, price: Number(e.target.value) }))}
        />
        <div className="flex justify-between items-center">
          <span>0 Bs.</span>
          <span>{filters.price}</span>
        </div>
      </div>
    </div>
  )
}