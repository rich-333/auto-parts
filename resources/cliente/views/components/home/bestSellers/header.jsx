export function Header() {
  return(
    <>
      <header className="flex justify-between items-center">
        <h4 className="font-semibold text-lg md:text-2xl">Más Vendidos</h4>
        <a href="{{ route('shop') }}" className="text-sm md:text-base font-semibold text-discount hover:underline">Ver Todo</a>
      </header>

      <div className="border-b-2 border-carousel-border my-5"></div>
    </>
  )
}