<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Producto;

class ProductController extends Controller 
{
    // HOME - PRODUCTS

    public function getSaleProducts()
    {
        $productos = Producto::where('activo', true)
            ->with([
                'imagenes' => function ($q) {
                    $q->where('es_principal', true);
                },
                'categoria',
                'marca',
                'descuento' => fn($q) => 
                    $q->where('activo', true)
                        ->where('fecha_inicio', '<=', now())
                        ->where('fecha_fin', '>=', now())
                        ->orderBy('id_descuento', 'desc')
                        ->take(1)
            ])
            ->inRandomOrder()
            ->take(8)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $productos
        ], 200);
    }

    public function getBestSellerProducts()
    {
        $productos = Producto::where('activo', true)
            ->with([
                'imagenes' => function ($q) {
                    $q->where('es_principal', true);
                },
                'categoria',
                'marca',
                'descuento' => fn($q) =>
                    $q->where('activo', true)
                        ->where('fecha_inicio', '<=', now())
                        ->where('fecha_fin', '>=', now())
                        ->orderBy('id_descuento', 'desc')
                        ->take(1)
            ])
            ->take(20)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $productos
        ], 200);
    }

    // SHOP

    public function getShopProducts() 
    {
        $productos = Producto::where('activo', true)
            ->with([
                'imagenes' => function ($q) {
                    $q->where('es_principal', true);
                },
            'categoria',
            'marca',
            'descuento' => fn($q) =>
                $q->where('activo', true)
                    ->where('fecha_inicio', '<=', now())
                    ->where('fecha_fin', '>=', now())
                    ->orderBy('id_descuento', 'desc')
                    ->take(1)
            ])
            ->get();

        return response()->json([
            'success' => true,
            'data' => $productos
        ], 200);
    }

    // Details

    public function getProductById($id)
    {
        $producto = Producto::where('id_producto', $id)
            ->where('activo', true)
            ->with([
                'imagenes',
                'categoria',
                'marca',
                'descuento' => fn($q) =>
                    $q->where('activo', true)
                        ->where('fecha_inicio', '<=', now())
                        ->where('fecha_fin', '>=', now())
                        ->orderBy('id_descuento', 'desc')
                        ->take(1)
            ])
            ->first();

        if (!$producto) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $producto
        ], 200);
    }

    public function getRelatedProducts($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado'
            ], 404);
        }

        $relacionados = Producto::where('activo', true)
            ->where('id_categoria', $producto->id_categoria)
            ->where('id_producto', '!=', $id) 
            ->with([
                'imagenes' => function ($q) {
                    $q->where('es_principal', true);
                },
                'categoria',
                'marca',
                'descuento' => fn($q) =>
                    $q->where('activo', true)
                        ->where('fecha_inicio', '<=', now())
                        ->where('fecha_fin', '>=', now())
                        ->orderBy('id_descuento', 'desc')
                        ->take(1)
            ])
            ->take(5)
            ->inRandomOrder()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $relacionados
        ], 200);
    }
}