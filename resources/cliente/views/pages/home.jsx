import { LayoutCliente } from "../layouts/layoutCliente"
import { Ads } from "../sections/home/ads"
import { Hero } from "../sections/home/hero"
import { Sales } from "../sections/home/sales"
import { BestSellers } from "../sections/home/bestSellers"
import { Contact } from "../sections/home/contact"
import { Categories } from "../sections/home/categories"

export function Home() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        <Hero/>
        <Sales/>
        <Ads/>
        <BestSellers/>
        <Contact/>
        <Categories/>
      </main>
    </LayoutCliente>
  )
}