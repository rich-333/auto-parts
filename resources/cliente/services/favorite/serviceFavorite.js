export async function addFavorite(id_usuario, id_producto) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  try {
    const response = await fetch("http://127.0.0.1:8000/favorito/add", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ id_usuario, id_producto })
    });

    return await response.json();
  } catch (e) {
    console.error("Error al agregar favorito:", e);
    return null;
  }
}

/*
export async function addFavorite(id_usuario, id_producto) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const formData = new FormData();
  formData.append('id_usuario', id_usuario);
  formData.append('id_producto', id_producto);

  try {
    const response = await fetch("http://127.0.0.1:8000/favorito/add", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Accept": "application/json",
      },
      body: formData,
    });

    return await response.json();
  } catch (e) {
    console.error("Error al agregar favorito:", e);
    return null;
  }
}

*/ 