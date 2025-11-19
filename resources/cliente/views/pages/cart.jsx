import { LayoutCliente } from "../layouts/layoutCliente"
import { CartTable } from "../sections/cart/cartTable"
import { CartTotal } from "../sections/cart/cartTotal"
import { EmptyPage } from "../components/ui/empty/emptyPage"

export function Cart() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[950px_1fr] gap-8">
          <CartTable/>
          <CartTotal/>
        </div>

        <EmptyPage icon="images\icons\header\cart.svg" description="Tu carrito esta vacio actualmente."/>
      </main>
    </LayoutCliente>
  )
}