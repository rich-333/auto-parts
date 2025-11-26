<?php

use App\Http\Controllers\Api\Client\BrandController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\Api\Client\CategoryController;
use App\Http\Controllers\Api\Client\ProductController;
use App\Http\Controllers\Api\Client\AuthClienteController;
use App\Http\Controllers\Api\Client\FavoriteController;  
use App\Http\Controllers\Api\Admin\CategoryAdminController;
use App\Http\Controllers\Api\Client\CartController;


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
Route::get('/categorias', [CategoryAdminController::class, 'index']);
Route::post('/categorias/crear', [CategoryAdminController::class, 'store']);
Route::delete('/categorias/eliminar/{id}', [CategoryAdminController::class, 'destroy']);
Route::put('/categorias/editar/{id}', [CategoryAdminController::class, 'update']);


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

//LOGIN - SIGN UP

Route::post('/client/register', [AuthClienteController::class, 'register']);
Route::post('/client/login', [AuthClienteController::class, 'login']);
Route::post('/client/logout', [AuthClienteController::class, 'logout']);


//FAVORITE

Route::post('/favorito/add', [FavoriteController::class, 'add']);
Route::delete('/favorito/{id}', [FavoriteController::class, 'delete']);
Route::get('/favoritos/lista/{idUsuario}', [FavoriteController::class, 'list'])->name('favoritos.lista');

//CART

Route::post('/carrito/add', [CartController::class, 'add']);
Route::get('/carrito/lista/{idUsuario}', [CartController::class, 'list'])->name('carrito.lista');
Route::delete('/carrito/{id}', [CartController::class, 'delete']);