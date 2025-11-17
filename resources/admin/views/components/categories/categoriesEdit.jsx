// CategoriesEdit.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categoryService';
import { CategoryForm } from '../../sections/categories/categoryForm';
import { LayoutAdmin } from '../../layouts/layoutAdmin';

export function CategoriesEdit() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategories().then(data => {
      const cat = data.find(c => c.id_categoria === parseInt(id));
      setCategory(cat);
    });
  }, [id]);

  if (!category) return <div>Cargando...</div>;

  return(
    <LayoutAdmin>
      <CategoryForm category={category} />
    </LayoutAdmin>
  );
}
