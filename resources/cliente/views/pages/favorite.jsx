import { FavoriteTable } from "../sections/favorite/favoriTable"
import { ButtonDeleteAll } from "../components/ui/buttons/buttonDeleteAll"
import { EmptyPage } from "../components/ui/empty/emptyPage"
import { LayoutCliente } from "../layouts/layoutCliente"
import { useFavorites } from "../../hooks/favorite/useFavorites"

export function Favorite() {
  const { favorites, loading, removeFavorite } = useFavorites();

  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        {
          loading ? (
            <p>Cargando favoritos...</p>
          ) : favorites.length === 0 ? (
            <EmptyPage icon="/images/icons/header/favorite.svg" description="Tu lista de favoritos esta vacio actualmente." />
          ) : (
            <>
              <FavoriteTable favorites={favorites} onDelete={removeFavorite} />
            </>
          )
        }
      </main>
    </LayoutCliente>
  )
}