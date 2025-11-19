import { FavoriteTable } from "../sections/favorite/favoriTable"
import { ButtonDeleteAll } from "../components/ui/buttons/buttonDeleteAll"
import { EmptyPage } from "../components/ui/empty/emptyPage"
import { LayoutCliente } from "../layouts/layoutCliente"

export function Favorite() {
  return (
    <LayoutCliente>
      <main className="max-w-7xl mx-auto my-8">
        <FavoriteTable/>
        <ButtonDeleteAll/>
        <EmptyPage icon="images\icons\header\favorite.svg" description="Tu lista de favoritos esta vacio actualmente." />
      </main>
    </LayoutCliente>
  )
}