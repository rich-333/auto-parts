import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getFavorites } from "../../services/favorite/listFavorite";
import { deleteFavorite } from "../../services/favorite/deleteFavorite";

export function useFavorites() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    async function fetchFavorites() {
      setLoading(true);
      const res = await getFavorites(user.id_usuario);
      if (res?.success) {
        setFavorites(res.data);
      } else {
        setFavorites([]);
      }
      setLoading(false);
    }

    fetchFavorites();
  }, [user, navigate]);

  const removeFavorite = async (idFavorito) => {
    const res = await deleteFavorite(idFavorito);
    if (res?.success) {
      setFavorites((prev) => prev.filter(fav => fav.id_favorito !== idFavorito));
    } else {
      console.error(res?.message || "No se pudo eliminar el favorito");
    }
  };

  return { favorites, loading, removeFavorite };
}