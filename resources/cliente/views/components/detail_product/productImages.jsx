import { Discount } from "../ui/product/dicount"

export function ProductImages( { product } ) {
  const descuentoValor =  Number(product.descuento?.[0]?.valor ?? 0)

  const principal = product.imagenes.find(img => img.es_principal == 1);
  const principalURL = principal
    ? `http://localhost:8000/${principal.url_imagen}`
    : "/images/components/clients/product/ejem.svg";

  const secundarias = product.imagenes.filter(img => img.es_principal == 0);

  return (
  <section className="flex flex-col gap-5">
    <div className=" relative">
      <img className="w-full h-130 border-2 border-carousel-border rounded-lg" src={principalURL} alt={product.nombre} />
      {
        descuentoValor > 0 && (
          <Discount descuento={descuentoValor}/>
        )
      }
    </div>
    <div className="flex gap-1">
      {
        secundarias.map(img => (
          <img key={img.id_imagen} className="border-2 border-carousel-border rounded-lg w-20 h-20" src={`http://localhost:8000/${img.url_imagen}`} alt="Miniatura" />
        ))
      }
    </div>
  </section>
  )
}