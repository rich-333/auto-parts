export function ProductImages() {
  return (
  <section className="flex flex-col gap-5">
    <div className=" relative">
      <img className="w-full h-130 border-2 border-carousel-border rounded-lg" src="images\components\clients\product\ejem.svg" alt="" />
      {
        /*
        <x-discount percentage="{{ number_format($descuento, 0) }}"/>
        */
      }
    </div>
    <div className="flex gap-1">
      <img className="border-2 border-carousel-border rounded-lg w-20 h-20" src="images\components\clients\product\ejem.svg" alt="" />
      <img className="border-2 border-carousel-border rounded-lg w-20 h-20" src="images\components\clients\product\ejem.svg" alt="" />
      <img className="border-2 border-carousel-border rounded-lg w-20 h-20" src="images\components\clients\product\ejem.svg" alt="" />
    </div>
  </section>
  )
}