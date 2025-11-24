import stylePagination from "../../../../css/ui/Pagination.module.css"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Pagination({ page, maxPage, goTo }) {
  const ultimaPagina = maxPage;

  const handlePreviusChange = () => {
    if(page > 0)
      goTo(page - 1)
  }

  const handleNextChange = () => {
    if(page < ultimaPagina)
      goTo(page + 1)
  }

  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="flex justify-center gap-2 mt-5">

      {
        page > 0 && (
          <button
            onClick={handlePreviusChange}
            className="p-2 px-3 rounded-lg font-semibold hover:bg-discount hover:text-white transition-all duration-150 cursor-pointer">
            <ChevronLeft/>
          </button>
        )
      }

      {
        Array.from({ length: maxPage + 1 }).map((_, index) => (
          <button
            key={index} 
            onClick={() => goTo(index)}
            className={`${ page === index ? stylePagination.pagination__active : ''} p-2 px-4 rounded-lg font-semibold 
              hover:bg-discount hover:text-white transition-all duration-150 cursor-pointer`}>
            {index + 1}
          </button>
        ))  
      }

      {
        page < ultimaPagina && (
          <button
            onClick={handleNextChange}
            className="p-2 px-3 rounded-lg font-semibold hover:bg-discount hover:text-white transition-all duration-150 flex justify-center items-center group cursor-pointer">
            <ChevronRight/>
          </button>
        )
      }
    </nav>
  )
}
