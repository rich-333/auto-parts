import { Header } from "../../components/home/bestSellers/header"
import { List } from "../../components/home/bestSellers/list"
import { Navigation } from "../../components/home/bestSellers/navigation"

export function BestSellers() {
  return(
    <section className="mb-10">
      <Header/>
      <List/>
      <Navigation/>
    </section>
  )
}