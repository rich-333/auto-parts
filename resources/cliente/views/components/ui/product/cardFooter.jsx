export function CardFooter() {
  return (
    <footer className="flex flex-col gap-2">
      <div className=" border-2 border-red-500"></div>
      <div className="flex justify-between text-xs font-normal">
        <p>Disponible: <span className=" font-semibold">27</span></p>
        <p>Vendido: <span className=" font-semibold">29</span></p>
      </div>
    </footer>
  )
}