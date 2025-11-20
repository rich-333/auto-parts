import { Link } from "react-router-dom"

export function Account( {question, text, link} ) {
  return (
    <p className="text-center text-sm text-gray-600 flex gap-1 justify-center">
      { question }
      <Link to={ link } className="text-blue-600 hover:underline">{ text }</Link>
    </p>
  )
}