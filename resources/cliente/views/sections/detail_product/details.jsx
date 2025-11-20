import { Header } from "../../components/detail_product/header"
import { ProductImages } from "../../components/detail_product/productImages"
import { ProductInfo } from "../../components/detail_product/productInfo"
import { Description } from "../../components/detail_product/description"

export function Details() {
  return (
    <>
      <Header />

      <div className=" grid grid-cols-2 my-4 gap-5">
        <ProductImages />
        <ProductInfo />
      </div>

      <Description/>

    </>
  )
}