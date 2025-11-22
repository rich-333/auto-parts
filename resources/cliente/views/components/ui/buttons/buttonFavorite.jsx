export function ButtonFavorite() {
  return (
    <form id="favoritoForm-{{ $producto->id_producto }}" data-id="{{ $producto->id_producto }}" action="{{ route('favorito.add', $producto->id_producto) }}" method="POST">
      <button
        type="submit"
        className="absolute top-3 right-3 p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-white/90
              hover:bg-discount hover:scale-110 active:scale-95 group cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path className="stroke-black group-hover:stroke-white transition-all duration-200" d="M12 21C11.7143 21 11.5238 20.9016 11.2381 20.7049C9.61905 19.918 8.19048 18.9344 6.85714 17.8525C4.47619 15.8852 2 12.8361 2 8.70492C2 5.55738 4.47619 3.09836 7.42857 3.09836C9.2381 3.09836 10.9524 4.08197 12 5.45902C13.0476 3.98361 14.6667 3 16.5714 3C19.619 3 22 5.55738 22 8.60656C22 12.7377 19.5238 15.8852 17.1429 17.7541C15.9048 18.8361 14.4762 19.7213 12.9524 20.5082H12.8571C12.2857 21 12.0952 21 12 21Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}