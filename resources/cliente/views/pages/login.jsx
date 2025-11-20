import { LayoutCliente } from "../layouts/layoutCliente"
import { LoginSection } from "../sections/login/loginSection"

export function Login() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-5">
        <LoginSection/>
      </main>
    </LayoutCliente>
  )
}