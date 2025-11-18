import styleFilter from "../../../../css/shop/Price.module.css"

export function Price() {
  return(
    <div className="flex flex-col gap-2 mb-6">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">Filtrar por precio</h2>
      <div>
        <input className={`${styleFilter.range__minimal}`} type="range" name="price" min="0" max="5000" id="priceRange"/>
        <div className="flex justify-between items-center">
          <span>0 Bs.</span>
          <span id="priceValue">5000 Bs.</span>
        </div>
      </div>
    </div>
  )
}