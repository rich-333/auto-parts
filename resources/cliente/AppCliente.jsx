import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./views/pages/home"
import { Shop } from "./views/pages/shop"
import { Favorite } from "./views/pages/favorite"
import { Cart } from "./views/pages/cart"
import { Login } from "./views/pages/login"
import { SignUp } from "./views/pages/signUp"
import { DetailsProduct } from "./views/pages/detailsProduct"
import { ScrollToTop } from "./views/components/ui/scroll/scrollToTop"

export  function AppCliente() {
  return(
    <BrowserRouter>
      <ScrollToTop/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Shop/>}/>
        <Route path="/favoritos" element={<Favorite/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/producto/:id" element={<DetailsProduct/>}/>

      </Routes>
    </BrowserRouter>
  )
}