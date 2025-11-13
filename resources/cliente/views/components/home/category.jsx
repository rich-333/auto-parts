export function Category({path, category, quantity}) {
  return (
    <a href="#" className="hover:scale-105 active:scale-95 active:ring-1 ring-discount transition-all duration-300 ease-out rounded-lg overflow-hidden">
      <article className="flex flex-col bg-gray-400/25 px-12 py-8 text-center">
        <img src={path} alt="" />
        <h3 className=" font-semibold">{category}</h3>
        <p className="font-medium lg:text-sm text-gray-500">{quantity}</p>
      </article>
    </a>
  )
}