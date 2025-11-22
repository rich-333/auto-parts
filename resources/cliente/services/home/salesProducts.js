export async function getSaleProducts() {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

    const response = await fetch("http://127.0.0.1:8000/client/home/products", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        ...(csrfToken ? { "X-CSRF-TOKEN": csrfToken } : {})
      },
      credentials: "include" 
    });

    if (!response.ok) {
      throw new Error(`Error al obtener productos: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      return data.data; 
    } else {
      console.error("No se obtuvo éxito al recibir los productos:", data);
      return [];
    }
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}
