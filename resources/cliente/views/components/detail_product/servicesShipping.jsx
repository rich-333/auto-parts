export function ServicesShipping({icon, title, description}) {
  return (
  <article className="bg-gray-200/80 rounded-md py-10 px-7">
    <img className="w-12 h-12 mx-auto mb-4" src={icon} alt={`Icono de ${title} `} />
    
    <h3 className="text-center font-semibold">{ title }</h3>
    <p className="text-center font-normal text-sm text-gray-600">{ description }</p>
  </article>
  )
}