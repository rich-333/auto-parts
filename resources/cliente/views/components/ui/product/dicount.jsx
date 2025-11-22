export function Discount({ descuento = '' }) {
  return(
    <p className=" absolute top-3 left-3 bg-discount w-12 h-6 rounded-sm text-center font-semibold text-xs md:text-sm text-white">
      { descuento } %
    </p>
  )
}