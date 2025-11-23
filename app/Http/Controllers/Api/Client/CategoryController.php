<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Categoria;

class CategoryController extends Controller 
{
    public function getCategoriesHome() 
    {
        $categorias = Categoria::where('activa', true)
            ->withCount('productos')
            ->inRandomOrder()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $categorias
        ], 200);
    }

    public function getCategoriesShop() 
    {
        $categorias = Categoria::where('activa', true)
            ->inRandomOrder()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $categorias
        ], 200);
    }
}   