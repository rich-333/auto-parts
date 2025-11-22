import styles from "../../../../css/home/Navigation.module.css"

export function Navigation( {page, maxPage, goTo} ) {

  return(
    <div className="flex justify-center items-center gap-3 mt-5">
      {Array.from({ length: maxPage }).map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`bestseller-bullet w-3 h-3 rounded-full cursor-pointer hover:bg-discount active:scale-75 ${
            page === index ? styles.is__active : "bg-discount/35"
          }`}
        />
      ))}
    </div>
  )
}