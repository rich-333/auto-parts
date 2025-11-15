import { SectionSearch } from "../components/ui/search/sectionSearch"
import { Sidebar } from "../components/ui/sidebar/sidebar"

export function LayoutAdmin({ children }) {
  return(
    <div className=" grid grid-cols-[225px_1fr]">
      <div>
        <Sidebar/>
      </div>
      <main className="my-3 px-5">
        <SectionSearch/>
        { children }
      </main>
    </div>
  )
}