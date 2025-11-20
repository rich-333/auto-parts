import { Link } from "react-router-dom"

export function ButtonPrimary({text, styles = "", link}) {
  return (
    <Link 
      to={link}
      className={`flex items-center justify-center
            shadow-md hover:scale-105 hover:bg-linear-to-r
            active:scale-95 active:shadow-inner
            transition-all duration-300 ease-out ${styles}`}
    >
      {text}
    </Link>
  )
}

//rounded-full w-36 h-11