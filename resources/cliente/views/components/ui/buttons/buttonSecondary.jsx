export function ButtonSecondary({text, styles}) {
  return (
    <button 
      className=" bg-discount w-36 h-11 rounded-lg text-white font-semibold mt-3 active:outline-4 outline-discount 
        active:outline-offset-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out" 
      type="submit"
    >
      Enviar mensaje
      </button>
  )
}