<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\Api\Admin\CategoryController;


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
Route::get('/categorias', [CategoryController::class, 'index']);
Route::post('/categorias/crear', [CategoryController::class, 'store']);
Route::delete('/categorias/eliminar/{id}', [CategoryController::class, 'destroy']);
Route::put('/categorias/editar/{id}', [CategoryController::class, 'update']);
