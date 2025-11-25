import { useState, useContext } from "react"
import { serviceRegisterCliente } from "../../../services/auth/serviceRegister"
import { UserContext } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"

export function SignUpForm() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await serviceRegisterCliente(form);

    if (res?.success) {
      login(res.data);  
      navigate("/");
    } else {
      alert("Error al registrarse");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} placeholder="Ingresa tu nombre" required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
      </div>

      <div>
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
        <input type="text" id="apellido" name="apellido" onChange={handleChange} placeholder="Ingresa tus apellidos" required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} placeholder="Ingrese su dirección de correo electrónico" required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
        <input type="password" id="password" name="password" onChange={handleChange} placeholder="Ingrese su contraseña" required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-txt-footer" />
      </div>

      <button type="submit" className="w-full bg-discount cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 font-bold">
        Registrarse
      </button>
    </form>
  )
}