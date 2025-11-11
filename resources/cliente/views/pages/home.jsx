import { LayoutCliente } from "../layouts/layoutCliente"
import { Hero } from "../sections/home/hero"
import { Sales } from "../sections/home/sales"

export function Home() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto">
        <Hero/>
        <Sales/>
      </main>
    </LayoutCliente>
  )
}