<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $request->validate([
            'id_usuario' => 'required',
            'id_producto' => 'required',
            'cantidad' => 'nullable|integer|min:1'
        ]);

        $idUsuario = $request->id_usuario;
        $idProducto = $request->id_producto;

        $existe = Carrito::where('id_usuario', $idUsuario)
                    ->where('id_producto', $idProducto)
                    ->first();

        if ($existe) {
            return response()->json([
                'success' => false,
                'message' => 'Este producto ya está en tu carrito'
            ], 409);
        }

        Carrito::create([
            'id_usuario' => $idUsuario,
            'id_producto' => $idProducto,
            'cantidad' => $request->cantidad ?? 1
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Producto agregado al carrito'
        ]);
    }

    public function list($idUsuario)
    {
        $carrito = Carrito::with(['producto', 'producto.marca', 'producto.imagenes'])
            ->where('id_usuario', $idUsuario)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $carrito
        ]);
    }

    public function delete($idCarrito)
    {
        $item = Carrito::find($idCarrito);

        if (!$item) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado en el carrito'
            ], 404);
        }

        $item->delete();

        return response()->json([
            'success' => true,
            'message' => 'Producto eliminado del carrito'
        ]);
    }
}