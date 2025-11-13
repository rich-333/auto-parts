import styles from "../../../../css/home/Navigation.module.css"

export function Navigation() {
  return(
    <div className="flex justify-center items-center gap-3 mt-5">
      <button className={`${styles.is__active} bestseller-bullet w-3 h-3 rounded-full bg-discount/35 cursor-pointer hover:bg-discount active:scale-75`}></button>
      <button className="bestseller-bullet w-3 h-3 rounded-full bg-discount/35 cursor-pointer hover:bg-discount active:scale-75"></button>
      <button className="bestseller-bullet w-3 h-3 rounded-full bg-discount/35 cursor-pointer hover:bg-discount active:scale-75"></button>
    </div>
  )
}