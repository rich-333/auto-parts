import { ServicesShipping } from "../../components/detail_product/servicesShipping"

export function Services() {
  return (
    <>
      <div className=" flex justify-between items-center my-10">
        <ServicesShipping icon="/images/icons/details_product/services/truck.svg" title="Envio rapido" description="Entrega segura y rápida a todo el país en 24-48 horas" />
        <ServicesShipping icon="/images/icons/details_product/services/return.svg" title="Devolución Fácil" description="30 días para devolver tu compra sin complicaciones" />
        <ServicesShipping icon="/images/icons/details_product/services/warranty.svg" title="Política de garantía" description="Garantía del fabricante en todos nuestros productos" />
      </div>
    </>
  )
}