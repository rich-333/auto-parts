import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer/footer";

export function LayoutCliente({ children }) {
  return(
    <>
      <Header/>
        <main>{ children }</main>
      <Footer/>
    </>
  )
}