export function ButtonPrimary({text, styles}) {
  return (
    <a 
      href=""
      className={`flex items-center justify-center rounded-full w-36 h-11 text-xs lg:text-base font-semibold 
            shadow-md hover:scale-105 hover:bg-linear-to-r
            active:scale-95 active:shadow-inner
            transition-all duration-300 ease-out ${styles}`}
    >
      {text}
    </a>
  )
}