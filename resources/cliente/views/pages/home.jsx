import { LayoutCliente } from "../layouts/layoutCliente"
import { Ads } from "../sections/home/ads"
import { Hero } from "../sections/home/hero"
import { Sales } from "../sections/home/sales"
import { BestSellers } from "../sections/home/bestSellers"

export function Home() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto">
        <Hero/>
        <Sales/>
        <Ads/>
        <BestSellers/>
      </main>
    </LayoutCliente>
  )
}