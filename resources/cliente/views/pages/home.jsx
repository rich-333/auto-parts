import { LayoutCliente } from "../layouts/layoutCliente"
import { Ads } from "../sections/home/ads"
import { Hero } from "../sections/home/hero"
import { Sales } from "../sections/home/sales"
import { BestSellers } from "../sections/home/bestSellers"
import { Contact } from "../sections/home/contact"

export function Home() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto">
        <Hero/>
        <Sales/>
        <Ads/>
        <BestSellers/>
        <Contact/>
      </main>
    </LayoutCliente>
  )
}