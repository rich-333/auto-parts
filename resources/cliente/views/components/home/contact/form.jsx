export function Form() {
  return(
    <form action="" className=" bg-form-contact rounded-lg border-2 border-carousel-border flex flex-col gap-4 p-6">
      <h3 className=" font-medium text-2xl md:text-3xl">Escribenos...</h3>
      <p className=" font-normal text-secondary mb-3">
        Cuéntanos tu consulta y un asesor te contactará en 1-2 días hábiles. Respetamos tu privacidad.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" flex flex-col gap-2.5">
          <label htmlFor="nombre" className=" text-black font-medium text-sm">Tu nombre *</label>
          <input className=" bg-white border-2 border-form-border shadow-xs rounded-lg py-2.5 px-2 focus:outline-discount/45" type="text" id="nombre"/>
        </div>

        <div className=" flex flex-col gap-2.5">
          <label htmlFor="email" className=" text-black font-medium text-sm">Tu email *</label>
          <input className=" bg-white border-2 border-form-border shadow-xs rounded-lg py-2.5 px-2 focus:outline-discount/45" type="email" id="email"/>
        </div>
      </div>

      <div className=" flex flex-col gap-2.5">
        <label htmlFor="tema" className=" text-black font-medium text-sm">Tema *</label>
        <input type="text" id="tema" className=" bg-white border-2 border-form-border shadow-xs rounded-lg py-2.5 px-2 focus:outline-discount/45"/>
      </div>  

      <div className=" flex flex-col gap-2.5">
        <label htmlFor="mensaje" className=" text-black font-medium text-sm">Tu mensaje</label>
        <textarea  className=" bg-white border-2 border-form-border shadow-xs rounded-lg py-2.5 px-2 focus:outline-discount/45" name="" id="mensaje" cols="5" rows="4"></textarea>
      </div>

      <button className=" bg-discount w-36 h-11 rounded-lg text-white font-semibold mt-3 active:outline-4 outline-discount active:outline-offset-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out" type="submit">Enviar mensaje</button>
    </form> 
  )
}