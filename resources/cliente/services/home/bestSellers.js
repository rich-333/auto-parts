export async function getBestSellerProducts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/client/home/bestsellers", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) return data.data;
    return [];
  } catch (e) {
    console.error("Error obteniendo best sellers", e);
    return [];
  }
}