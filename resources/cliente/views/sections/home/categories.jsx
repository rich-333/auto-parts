import { Category } from "../../components/home/category"

export function Categories() {
  return(
    <section className="flex gap-2.5">
      <Category category="Radiadores" path="images/components/clients/home/categories/airCondition.svg" quantity={4}/>
      <Category category="Amortiguadores" path="images/components/clients/home/categories/bearings.svg" quantity={10}/>
      <Category category="Frenos" path="images/components/clients/home/categories/brakes.svg" quantity={14}/>
    </section>
  )
}