import { Header } from "../../components/home/bestSellers/header"
import { List } from "../../components/home/bestSellers/list"
import { Navigation } from "../../components/home/bestSellers/navigation"
import { useBestSellers } from "../../../hooks/home/useBestSellers"

export function BestSellers() {
  const { currentProducts, page, maxPage, goTo } = useBestSellers();

  return(
    <section className="mb-10">
      <Header/>

      <List products={currentProducts} />
      
      <Navigation page={page} maxPage={maxPage} goTo={goTo}/>
    </section>
  )
}