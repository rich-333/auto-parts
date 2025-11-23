export async function serviceCategories() {
  try {
    const response = await fetch("http://127.0.0.1:8000/client/shop/categories", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    });

    const data = await response.json();

    if (data.success)
      return data.data;
    return [];
  }
  catch (e) {
    console.error("Error al obtener las categorias en los filtros", e);
    return [];
  }
}