export function Brand() {
  return(
    <div className="flex flex-col gap-2">
      <h2 className="text-base md:text-lg font-semibold text-gray-700 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">Marcas</h2>

        <div className=" flex items-center gap-1">
          <input className=" shadow-xs" type="radio" id="" name="brand" value=""/>
          <label className=" font-medium text-sm md:text-base" htmlFor="">Nombre marca</label>
        </div>
    </div>
  )
}