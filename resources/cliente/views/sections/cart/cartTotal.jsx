import { CartSubTotal } from "../../components/cart/cartSubTotal"
import { CartShipping } from "../../components/cart/cartShipping"
import { CartTotal as Total } from "../../components/cart/cartTotal"

export function CartTotal({ cart }) {
  return (
    <section id="cart-totals" className=" shadow-xl p-3 rounded-2xl h-70">
      <h2 className=" text-xl font-medium">Total del carrito</h2>

      <div className=" mt-4">

        <CartSubTotal/>

        <CartShipping/>

        <Total/>

      </div>

      <button className=" bg-discount text-white font-semibold w-full mt-2 rounded-lg py-3 cursor-pointer">
        Proceder al pago
      </button>
    </section>
  )
}