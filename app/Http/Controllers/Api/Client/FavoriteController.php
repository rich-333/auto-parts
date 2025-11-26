<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Favorito;
use App\Models\Producto;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function list($idUsuario)
    {
        $favoritos = Favorito::with([
                'producto',
                'producto.marca',
                'producto.imagenes'
            ])
            ->where('id_usuario', $idUsuario)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $favoritos
        ]);
    }

    public function add(Request $request)
    {
        $request->validate([
            "id_usuario" => "required",
            "id_producto" => "required"
        ]);

        $existe = Favorito::where("id_usuario", $request->id_usuario)
                        ->where("id_producto", $request->id_producto)
                        ->first();

        if ($existe) {
            return response()->json([
                "success" => false,
                "message" => "Este producto ya está en tu lista de favoritos"
            ], 409);
        }

        Favorito::create([
            "id_usuario" => $request->id_usuario,
            "id_producto" => $request->id_producto
        ]);

        return response()->json([
            "success" => true,
            "message" => "Producto agregado a favoritos"
        ]);
    }

    public function delete($idFavorito)
    {
        $favorito = Favorito::find($idFavorito);

        if (!$favorito) {
            return response()->json([
                "success" => false,
                "message" => "Favorito no encontrado"
            ], 404);
        }

        $favorito->delete();

        return response()->json([
            "success" => true,
            "message" => "Producto eliminado de favoritos"
        ]);
    }
}