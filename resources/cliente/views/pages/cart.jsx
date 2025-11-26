import { LayoutCliente } from "../layouts/layoutCliente"
import { CartTable } from "../sections/cart/cartTable"
import { CartTotal } from "../sections/cart/cartTotal"
import { EmptyPage } from "../components/ui/empty/emptyPage"
import { useCart } from "../../hooks/cart/useCart"

export function Cart() {
  const { cart, loading, removeProductFromCart } = useCart();

  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        {
          loading ? (
            <p>Cargando carrito...</p>
          ) : cart.length === 0 ? (
            <EmptyPage icon="images\icons\header\cart.svg" description="Tu carrito esta vacio actualmente."/> 
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[950px_1fr] gap-8">
              <CartTable cart={cart} onDelete={removeProductFromCart}/>
              <CartTotal cart={cart}/>
            </div>
          )
        }

      </main>
    </LayoutCliente>
  )
}