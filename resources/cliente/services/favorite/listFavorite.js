export async function getFavorites(id_usuario) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/favoritos/lista/${id_usuario}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    return await response.json();
  } catch (e) {
    console.error("Error al obtener favoritos:", e);
    return null;
  }
}
