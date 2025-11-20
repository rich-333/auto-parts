import { SocialMedia } from "../../components/login_sign_up/socialMedia"
import { SignUpForm } from "../../components/signUp/signUpForm"
import { Politics } from "../../components/login_sign_up/politics"
import { Account } from "../../components/login_sign_up/account"

export function SignUpSection() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 my-10">
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Registrarse</h1>
        <SocialMedia />
        <SignUpForm />
        <Politics />
        <div className="border-t border-gray-200 my-6"></div>
        <Account question="Ya tienes una cuenta?" text="Iniciar Sesion" link="#"/>
      </div>
    </section>
  )
}