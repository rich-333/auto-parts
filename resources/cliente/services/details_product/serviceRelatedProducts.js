export async function serviceRelatedProducts(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/client/product/${id}/related`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    const data = await response.json();

    if (data.success)
      return data.data;

    return [];
  }
  catch (error) {
    console.error("Error al obtener productos relacionados:", error);
    return [];
  }
}
