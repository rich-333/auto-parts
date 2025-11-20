import { Link } from "react-router-dom"

export function Category({path, category, quantity}) {
  return (
    <Link to="/tienda" className="bg-gray-400/25 hover:-translate-y-2 hover:bg-gray-400/40 active:scale-95 transition-all duration-300 ease-out rounded-lg overflow-hidden">
      <article className="flex flex-col px-12 py-8 text-center">
        <img src={path} alt="" />
        <h3 className=" font-semibold">{category}</h3>
        <p className="font-medium lg:text-sm text-gray-500">{quantity}</p>
      </article>
    </Link>
  )
}