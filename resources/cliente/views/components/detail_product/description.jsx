export function Description( { product } ) {
  return (
    <div className="mb-8">
      <h4 className=" font-medium text-discount">Descripcion</h4>
      <hr className=" border-black/20 my-2.5" />

      <div className=" flex flex-col gap-2.5">
        <p className=" font-normal">
          { product.descripcion }
        </p>
      </div>
    </div>
  )
}