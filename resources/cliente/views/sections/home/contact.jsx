import { Image } from "../../components/home/contact/image"
import { Form } from "../../components/home/contact/form"

export function Contact() {
  return(
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      <Image/>
      <Form/>
    </section>
  )
}