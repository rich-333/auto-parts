export function Footer() {
  return(
    <footer className=" bg-footer px-5 text-white"> 
      <div className="max-w-8xl flex-col justify-between items-center w-7xl mx-auto">
        <div className="flex justify-between py-14 pr-25">
          <address className="flex flex-col gap-5 not-italic">
            <h3 className=" font-bold">Contactanos</h3>
            <ul className="flex flex-col gap-6 text-sm ml-9">
              <li>
                <h4 className="font-bold mb-1">Numero de telefono</h4>
                <a href="tel:+59177912729" className=" text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">+591 77912729</a>
              </li>
              <li>
                <h4 className="font-bold mb-1">E-Mail</h4>
                <a href="mailto:turboparts@gmail.com" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">turboparts@gmail.com</a>
              </li>
              <li>
                <h4 className="font-bold mb-1">Direccion</h4>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Calle 123, Ciudad, Pais</a>
              </li>
            </ul>
          </address>

          <section className="flex flex-col gap-5">
            <h3 className=" font-bold">Dejanos ayudarte</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Devoluciones</a>
              </li>
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Politicas de Privacidad</a>
              </li>
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Terminos y Condiciones</a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-5">
            <h3 className=" font-bold">Conocenos</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Acerca de Turbo Parts</a>
              </li>
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Comentarios de Clientes</a>
              </li>
              <li>
                <a href="" className="text-txt-footer hover:underline hover:underline-offset-3 transition-all duration-100">Responsabilidad Social</a>
              </li>
            </ul>
          </section>
        </div>

        <div className=" flex justify-between items-center border-y-2 w-full border-icons">
          <div>
            <img src="images\logos\LogoTurboParts.png" alt="Turbo Parts" className="w-20"/>
          </div>
          <nav className="flex items-center gap-3 ">
            <p className=" font-semibold text-xs text-txt-footer">Siguenos:</p>
            <ul className="flex items-center gap-1">
              <li>
                <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"  className=" bg-icons w-10 h-10 rounded-full flex justify-center items-center">
                  <img src="images\icons\footer\facebook.svg" className=" w-icon-footer h-icon-footer" alt="" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"  className=" bg-icons w-10 h-10 rounded-full flex justify-center items-center">
                  <img src="images\icons\footer\twitter.svg" className=" w-3.5 h-3" alt="" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className=" bg-icons w-10 h-10 rounded-full flex justify-center items-center">
                  <img src="images\icons\footer\instagram.svg" className=" w-4 h-4" alt="" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className=" bg-icons w-10 h-10 rounded-full flex justify-center items-center">
                  <img src="images\icons\footer\youtube.svg" className=" w-3.5 h-3.5" alt="" aria-hidden="true"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center w-full py-4">
          <small className="opacity-50">Copyright 2025 © Turbo Parts Theme. All right reserved.</small>
          <ul className="flex items-center gap-3">
            <li>
              <img src="images\icons\footer\mastercard.svg" alt="Mastercard"/>
            </li>
            <li>
              <img src="images\icons\footer\visa.svg" alt="Visa"/>
            </li>
            <li>
              <img src="images\icons\footer\paypal.svg" alt="PayPal"/>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}