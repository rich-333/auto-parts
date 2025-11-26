export async function addToCart(id_usuario, id_producto, cantidad = 1) {
  const csrfMeta = document.querySelector('meta[name="csrf-token"]');
  const csrfToken = csrfMeta ? csrfMeta.content : '';

  const formData = new FormData();
  formData.append('id_usuario', id_usuario);
  formData.append('id_producto', id_producto);
  formData.append('cantidad', cantidad);

  try {
    const response = await fetch("http://127.0.0.1:8000/carrito/add", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Accept": "application/json"
      },
      body: formData
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Error agregando al carrito");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en addToCart:", error);
    throw error;
  }
}

export async function getCart(id_usuario) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/carrito/lista/${id_usuario}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getCart:", error);
    return [];
  }
}

export async function deleteCartItem(idCarrito) {
  const csrfMeta = document.querySelector('meta[name="csrf-token"]');
  const csrfToken = csrfMeta ? csrfMeta.content : '';

  try {
    const response = await fetch(`http://127.0.0.1:8000/carrito/${idCarrito}`, {
      method: "DELETE",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Error eliminando producto del carrito");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en deleteCartItem:", error);
    throw error;
  }
}
