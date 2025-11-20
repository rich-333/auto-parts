export function Account( {question, text, link} ) {
  return (
    <p className="text-center text-sm text-gray-600">
      { question }
      <a href={ link } className="text-blue-600 hover:underline">{ text }</a>
    </p>
  )
}