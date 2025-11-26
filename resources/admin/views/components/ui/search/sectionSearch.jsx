import { Link } from "react-router-dom"
import { SearchBar } from "./search"
import { ButtonPrimary } from "../../../../../cliente/views/components/ui/buttons/buttonPrimary"
import { Select } from "./select"

export function SectionSearch({title = "Lista......", }) {
  return(
    <section className=" bg-white shadow-2xl w-full my-2 flex justify-between items-center px-6 py-3 rounded-xl">
      <h2 className=" text-2xl font-bold">{title}</h2>
      <div className=" flex items-center gap-3">
        <SearchBar placeholder="Buscar categorias......"/>
        <Select placeholder="Estado"/>
        <ButtonPrimary link="/categories/create" text="Agregar" styles="bg-discount text-white px-5 py-2.5 rounded-lg focus:outline-4 outline-discount focus:outline-offset-2"/>
      </div>
    </section>
  )
}