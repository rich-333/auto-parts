export async function serviceProductById(id) {
  try{
    const response = await fetch(`http://127.0.0.1:8000/client/product/${id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    const data = await response.json();

    if (data.success)
      return data.data;

    return null;
  }
  catch(e) {
    console.error("Error al obtener producto:", e);
    return null;
  }
}
