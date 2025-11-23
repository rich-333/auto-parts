export function Category({ categories = [] }) {
  return(
    <div className=" flex flex-col gap-2 mb-6">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">filtrar por categoria</h2>

        {
          categories.map((category) => (
            <div className="flex items-center gap-1">
              <input className=" shadow-xs" type="checkbox" id="" name="category[]" value="" />
              <label className=" font-medium text-sm md:text-base" htmlFor="">{ category.nombre }</label>
            </div>
          ))
        }
    </div>
  )
}