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
}