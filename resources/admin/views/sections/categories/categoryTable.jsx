import { Edit, Trash2, Tag, ListChecks } from 'lucide-react'; 
import { StatusBadge } from "../../components/ui/status/statusBadge";
import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categoryService';
import { deleteCategory } from '../../../services/categoryService';
import { useNavigate } from "react-router-dom";

export function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then(data => {
        console.log("DATA DESDE API:", data);
        setCategories(data)})
      .catch(err => {
        console.error("Error cargando categorías:", err);
      });
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000); // 3000ms = 3s
      return () => clearTimeout(timer);
    }
  }, [message]);

  function handleDelete(idCategoria) {
    if (!confirm("¿Seguro que deseas eliminar esta categoría?")) return;

    deleteCategory(idCategoria)
      .then(() => {
        setCategories(prev => prev.filter(cat => cat.id_categoria !== idCategoria));
        setMessage({ type: 'success', text: 'Categoría eliminada correctamente' });
      })
      .catch(err => {
        console.error("Error eliminando categoría:", err);
        setMessage({ type: 'error', text: 'No se pudo eliminar la categoría' });
      });
  }

  function handleEdit(idCategoria) {
    navigate(`/categories/edit/${idCategoria}`);
  }

  return(
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {message && (
        <div
          className={`fixed z-10 right-10 top-27 p-4 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-6">Gestión de Categorías</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Imagen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">
                Acciones
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-100">

            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 text-sm italic font-semibold"
                >
                  No hay categorías registradas todavía.
                </td>
              </tr>
            ) : (
            categories.map((category) => (
                <tr 
                  key={category.id_categoria} 
                  className="hover:bg-indigo-50 transition-colors"
                >
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Tag className="w-8 h-8 mr-3 text-indigo-500" /> 
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{category.nombre}</div>
                        <div className="text-xs text-gray-500">ID: {category.id_categoria}</div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <img className='w-auto h-auto rounded-lg' src={category.url_imagen} alt={category.nombre} />
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-700 line-clamp-2">{category.descripcion}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge isActive={category.activa === 1} />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(category.id_categoria)}
                        className="text-indigo-600 hover:text-indigo-900 p-1 rounded-full hover:bg-indigo-100 transition-colors"
                        title="Editar Categoría"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={() => handleDelete(category.id_categoria)}
                        className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100 transition-colors"
                        title="Eliminar Categoría"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>

                </tr>)
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}