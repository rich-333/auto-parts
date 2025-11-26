import { ButtonPrimary } from "../buttons/buttonPrimary"

export function EmptyPage({ icon, description }) {
  return (
    <section className=" w-full my-7 flex flex-col items-center gap-10">
      <div className="w-44 h-44 bg-heading flex items-center justify-center rounded-full">
        <img className="w-28 h-28 mx-auto" src={icon} alt="" />  
      </div>

      <div className=" flex flex-col items-center gap-4">
        <p className=" font-normal text-center">{ description }</p>
        <ButtonPrimary link="/" text="Volver a la tienda" styles=" bg-discount text-white px-6 py-3 rounded-lg focus:outline-4 outline-discount 
        focus:outline-offset-2"/>
      </div>
    </section>
  )
}