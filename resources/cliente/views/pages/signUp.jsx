import { LayoutCliente } from "../layouts/layoutCliente"
import { SignUpSection } from "../sections/signUp/signUpSection"

export function SignUp() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-5">
        <SignUpSection/>
      </main>
    </LayoutCliente>
  )
} 