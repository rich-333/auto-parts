export async function serviceLoginCliente(data) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('password', data.password);

  try {
    const response = await fetch("http://127.0.0.1:8000/client/login", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Accept": "application/json"
      },
      body: formData
    });

    return await response.json();
  } catch (e) {
    console.error("Error al iniciar sesión:", e);
    return null;
  }
}
