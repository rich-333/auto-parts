import { Tag, PlusCircle, AlignLeft } from 'lucide-react';
import { useState } from 'react';
import { InputGroup } from '../../components/ui/input/inputGroup';
import { InputMainImage } from '../../components/ui/input/inputMainImage';
import { createCategory } from '../../../services/categoryService';
import { updateCategory } from '../../../services/categoryService';
import { useNavigate } from "react-router-dom";

export function CategoryForm({ category }) {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    nombre: category?.nombre || '',
    descripcion: category?.descripcion || '',
    activa: category?.activa ?? true,
    url_imagen: null
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); 

    try {
      const form = new FormData();
      form.append('nombre', formData.nombre);
      form.append('descripcion', formData.descripcion);
      form.append('activa', formData.activa ? 1 : 0);
      if (formData.url_imagen) {
        form.append('url_imagen', formData.url_imagen);
      }

      if (category) {

        await updateCategory(category.id_categoria, form);
        alert("Categoría actualizada correctamente");
      } else {

        await createCategory(form);
        alert("Categoría creada correctamente");
      }

      navigate("/categories");

    } catch (error) {
      alert("Error al guardar la categoría");
      console.error(error);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es obligatoria.";
    } else if (formData.descripcion.length < 10) {
      newErrors.descripcion = "La descripción debe tener al menos 10 caracteres.";
    }

    if (!category && !formData.url_imagen) {
      newErrors.url_imagen = "Debes seleccionar una imagen.";
    }

    return newErrors;
  };

  return(
    <div className="w-full mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <div className="flex items-center mb-6 border-b pb-4">
        <PlusCircle className="w-8 h-8 text-indigo-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">Añadir Nueva Categoría</h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full">

        <div className="flex flex-wrap -mx-3 border-b pb-6 mb-6">
          <h3 className="w-full px-3 text-xl font-semibold text-gray-700 mb-4">
            <Tag className="w-5 h-5 inline mr-2" />
            Detalles de Clasificación
          </h3>
          

          <InputGroup label="Nombre de la Categoría (Ej: Frenos y Suspensión)" name="nombre" icon={Tag} onChangeInput={handleChange} formData={formData}/>
          {errors.nombre && (
            <p className="text-red-600 text-xs ml-3 mb-2.5">{errors.nombre}</p>
          )}
          
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 shadow-sm"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ej: Repuestos relacionados con el sistema de frenado y amortiguadores..."
              rows="3"
            />
            {errors.descripcion && (
              <p className="text-red-600 text-xs my-3">{errors.descripcion}</p>
            )}
          </div>

          <div className=' w-full'>
            <InputMainImage 
              name="url_imagen" 
              initialImage={category?.url_imagen ? `http://127.0.0.1:8000/${category.url_imagen}` : null}
              onImageSelect={(file) => 
                setFormData(prev => ({ ...prev, url_imagen: file }))
            }/>
            {errors.url_imagen && (
              <p className="text-red-600 text-xs mt-1 ml-3">{errors.url_imagen}</p>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 border-b pb-6 mb-6">
          <h3 className="w-full px-3 text-xl font-semibold text-gray-700 mb-4">
            <AlignLeft className="w-5 h-5 inline mr-2" />
            Opciones
          </h3>
          
          <div className="w-full px-3 mb-6">
            <div className="flex items-center">
              <input
                id="activa"
                name="activa"
                type="checkbox"
                checked={formData.activa}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="activa" className="ml-2 block text-sm font-medium text-gray-700">
                Categoría Activa (`activa` TINYINT)
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">Si está activa, aparecerá como opción al crear nuevos repuestos.</p>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-150 ease-in-out flex items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            {category ? 'Actualizar Categoria' : 'Crear Categoría'}
          </button>
        </div>
      </form>
    </div>
  )
}