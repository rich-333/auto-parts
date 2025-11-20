export function SocialMedia() {
  return (
    <div className="space-y-3 mb-6 border-b-2 border-carousel-border pb-4">
      <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-100 font-bold">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
        Continuar con Google
      </button>
      <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-100 font-bold">
        <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
        Continuar con Facebook
      </button>
    </div>
  )
}