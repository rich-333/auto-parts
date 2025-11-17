export async function getCategories() {
  const response = await fetch("http://127.0.0.1:8000/categorias");
  const data = await response.json();
  return data;
}

/*export async function createCategory(formData) {
  const response = await fetch("http://127.0.0.1:8000/categorias/crear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Error al crear categoría");
  }

  return await response.json();
}*/

export async function createCategory(formData) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const response = await fetch("http://127.0.0.1:8000/categorias/crear", {
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": csrfToken,
      "Accept": "application/json", 
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error al crear categoría");
  }

  return await response.json();
}

const csrf = document.querySelector('meta[name="csrf-token"]').content;

export async function deleteCategory(id) {
  const response = await fetch(`http://127.0.0.1:8000/categorias/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "X-CSRF-TOKEN": csrf,
      "Accept": "application/json"
    }
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Error eliminando categoría");

  return data;
}

export async function updateCategory(id, formData) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  formData.append('_method', 'PUT');

  const response = await fetch(`http://127.0.0.1:8000/categorias/editar/${id}`, {
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": csrfToken,
      "Accept": "application/json"
    },
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || "Error al actualizar categoría");
  }

  return await response.json();
}