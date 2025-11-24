<?php

use App\Http\Controllers\Api\Client\BrandController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\Api\Client\CategoryController;
use App\Http\Controllers\Api\Client\ProductController;  


/*Route::get('/', function () {
  return view('admin');
});*/

Route::get('/', function () {
  return view('cliente');
});

Route::get('/admin/categorias', function () {
  return Inertia::render('Admin/Category/Categories'); 
});

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('dashboard', function () {
    return Inertia::render('dashboard');
  })->name('dashboard');
});

require __DIR__.'/settings.php';


// API

//ADMIN
Route::get('/categorias', [CategoryController::class, 'index']);
Route::post('/categorias/crear', [CategoryController::class, 'store']);
Route::delete('/categorias/eliminar/{id}', [CategoryController::class, 'destroy']);
Route::put('/categorias/editar/{id}', [CategoryController::class, 'update']);


//CLIENT - HOME
Route::get('/client/home/products', [ProductController::class, 'getSaleProducts']);
Route::get('/client/home/bestsellers', [ProductController::class, 'getBestSellerProducts']);
Route::get('/client/home/categories', [CategoryController::class, 'getCategoriesHome']);

//SHOP
Route::get('/client/shop/products', [ProductController::class, 'getShopProducts']);
Route::get('/client/shop/brands', [BrandController::class, 'getBrands']);
Route::get('/client/shop/categories', [CategoryController::class, 'getCategoriesShop']);

//DETAILS PRODUCT
Route::get('/client/product/{id}', [ProductController::class, 'getProductById']);
Route::get('/client/product/{id}/related', [ProductController::class, 'getRelatedProducts']);
