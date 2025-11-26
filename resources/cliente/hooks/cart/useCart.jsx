import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getCart, addToCart, deleteCartItem } from "../../services/cart/serviceCart";

export function useCart() {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setCart([]);
      setLoading(false);
      return;
    }

    async function fetchCartItems() {
      setLoading(true);
      try {
        const res = await getCart(user.id_usuario);
        setCart(res?.success ? res.data : []);
      } catch (error) {
        console.error("Error cargando carrito:", error);
        setCart([]);
      }
      setLoading(false);
    }

    fetchCartItems();
  }, [user]);

  const addProductToCart = async (productId, cantidad = 1, navigate) => {
    if (!user) {
      navigate("/login");
      return { success: false, message: "Debes iniciar sesión" };
    }

    try {
      const res = await addToCart(user.id_usuario, productId, cantidad);

      if (res?.success) {
        const updated = await getCart(user.id_usuario);
        setCart(updated.data ?? []);
        return { success: true, message: "Producto agregado al carrito" };
      } else {
        return { success: false, message: res.message || "No se pudo agregar" };
      }
    } catch (error) {
      console.error("Error agregando al carrito:", error);
      return { success: false, message: "El producto ya fue agregado al carrito" };
    }
  };

  const removeProductFromCart = async (cartItemId) => {
    try {
      const res = await deleteCartItem(cartItemId);
      if (res.success) {
        setCart(prev => prev.filter(item => item.id_carrito !== cartItemId));
      }
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };

  return { cart, loading, addProductToCart, removeProductFromCart };
}
