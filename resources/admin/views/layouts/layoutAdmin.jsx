import { Sidebar } from "../components/ui/sidebar/sidebar"

export function LayoutAdmin({ children }) {
  return(
    <div className=" bg-amber-200 grid grid-cols-[300px_1fr]">
      <Sidebar/>
      <main className=" my-3 ml-59 w-7xl">
        { children }
      </main>
    </div>
  )
}