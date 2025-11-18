import stylePagination from "../../../../css/ui/Pagination.module.css"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Pagination() {
  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="flex justify-center gap-2 mt-5">
      <button
        className="p-2 px-4 rounded-lg font-semibold hover:bg-discount hover:text-white transition-all duration-150 cursor-pointer">
        <ChevronLeft/>
      </button>

      <button 
        className={`${stylePagination.pagination__active} p-2 px-4 rounded-lg font-semibold hover:bg-discount hover:text-white transition-all duration-150 cursor-pointer`}>
        1
      </button>

      <button
        className="p-2 px-4 rounded-lg font-semibold hover:bg-discount hover:text-white transition-all duration-150 flex justify-center items-center group cursor-pointer">
        <ChevronRight/>
      </button>
    </nav>
  )
}
