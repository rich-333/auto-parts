const BASE_URL = "http://127.0.0.1:8000";

export async function deleteFavorite(idFavorito) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  try {
    const response = await fetch(`${BASE_URL}/favorito/${idFavorito}`, {
      method: "DELETE",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Accept": "application/json"
      }
    });

    return await response.json();
  } catch (e) {
    console.error("Error al eliminar favorito:", e);
    return null;
  }
}