<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Marca;

class BrandController extends Controller
{
    // FILTERS

    public function getBrands() 
    {
        $marcas = Marca::all();

        return response()->json([
            'success' => true,
            'data' => $marcas
        ], 200);
    }
}