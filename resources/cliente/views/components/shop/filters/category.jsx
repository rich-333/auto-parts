export function Category({ categories = [], filters, setFilters }) {
  const toggleCategory = (id) => {
    const newCategories = filters.categories.includes(id)
      ? filters.categories.filter(c => c !== id)
      : [...filters.categories, id]

    setFilters(prev => ({ ...prev, categories: newCategories }))
  }

  return(
    <div className=" flex flex-col gap-2 mb-6">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">filtrar por categoria</h2>

        {
          categories.map((category) => (
            <div key={category.id_categoria} className="flex items-center gap-1">
              <input
                className=" shadow-xs" 
                type="checkbox"
                checked={filters.categories.includes(category.id_categoria)} 
                onChange={() => toggleCategory(category.id_categoria)}
              />
              <label className=" font-medium text-sm md:text-base" htmlFor="">{ category.nombre }</label>
            </div>
          ))
        }
    </div>
  )
}