export function ServiceOrders() {
  return (
  <section className=" bg-gray-200/60 rounded-md flex flex-col gap-4 p-5">
    <div className=" flex gap-3 items-center">
      <img className=" w-4 h-4" src="images\icons\details_product\info\orders.svg" alt="" />
      <p className=" font-normal">Envío en <strong>24 horas</strong>: Su producto será enviado rápidamente.</p>
    </div>
    <div className=" flex gap-3 items-center">
      <img className=" w-4 h-4" src="images\icons\details_product\info\guarantee.svg" alt="" />
      <p className=" font-normal">Garantía de <strong>3 años</strong>: Turbo Parts es seguro bajo las condiciones de la garantía.</p>
    </div>
  </section>
  )
}