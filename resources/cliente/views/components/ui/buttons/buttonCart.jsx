import { useCart } from "../../../../hooks/cart/useCart";
import { useNavigate } from "react-router-dom";

export function ButtonCart({ productId }) {
  const { addProductToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = async () => {
    const result = await addProductToCart(productId, 1, navigate);

    alert(result.message);
  };

  return (
    <button onClick={handleAdd} className="bg-discount rounded-lg p-2 transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md cursor-pointer active:outline-4 outline-discount active:outline-offset-2">
      <img src="/images/icons/header/cart.svg" alt=""/>
    </button>
  )
}