export function Header() {
  return (
    <header className=" mt-5 border-b-2 border-carousel-border pb-2.5"> 
      <h2 className=" text-3xl md:text-4xl font-medium">Producto Nombre</h2>
      <div className=" flex gap-5 items-center mt-4">
        <div className=" flex gap-1.5 items-center">
          <img className=" w-4 h-4" src="images\components\clients\product\star.svg" alt="" />
          <img className=" w-4 h-4" src="images\components\clients\product\star.svg" alt="" />
          <span className="text-sm font-medium">'N/A'</span>
        </div>
        <p className=" text-stock font-medium text-sm md:text-base">• En stock</p>
      </div>
    </header>
  )
}