export function InfoShop() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-6 ">
        <img src="images/components/clients/home/info-shop/original.svg" alt=""/>
        <div className="flex flex-col justify-center gap-1">
          <h3 className=" font-semibold">Productos Originales</h3>
          <p className=" text-xs md:text-sm font-normal">Repuestos certificados por el fabricante con garantía.</p>
        </div>
      </div>
      <div className="border-r-2 border-carousel-border h-10"></div>
      <div className="flex gap-6">
        <img src="images/components/clients/home/info-shop/affordable.svg" alt=""/>
        <div className="flex flex-col justify-center gap-1">
          <h3 className=" font-semibold">Tarifas Asequibles</h3>
          <p className="text-xs md:text-sm font-normal">Precios competitivos y promociones frecuentes.</p>
        </div>
      </div>
      <div className="border-r-2 border-carousel-border h-10"></div>
      <div className="flex gap-6">
        <img src="images/components/clients/home/info-shop/wide.svg" alt=""/>
        <div className="flex flex-col justify-center gap-1">
          <h3 className=" font-semibold">Amplia Variedad</h3>
          <p className="text-xs md:text-sm font-normal">Amplio catálogo para múltiples marcas y modelos.</p>
        </div>
      </div>
    </div>
  )
}