<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoryAdminController extends Controller
{
    public function index()
    {
        return response()->json(Categoria::all());
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|max:255',
                'descripcion' => 'nullable|string',
                'activa' => 'required|boolean',
                'url_imagen' => 'nullable|image|max:2048', 
            ]);

            $urlImagen = null;
            if ($request->hasFile('url_imagen')) {
                $file = $request->file('url_imagen');
                $path = $file->store('categorias', 'public');
                $urlImagen = 'storage/' . $path;
            }

            $categoria = Categoria::create([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'activa' => $request->activa,
                'url_imagen' => $urlImagen,
            ]);

            return response()->json([
                'message' => 'Categoría creada correctamente',
                'data' => $categoria
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $categoria = Categoria::find($id);

            if (!$categoria) {
                return response()->json(['error' => 'Categoría no encontrada'], 404);
            }

            if ($categoria->url_imagen && file_exists(public_path($categoria->url_imagen))) {
                unlink(public_path($categoria->url_imagen));
            }

            $categoria->delete();

            return response()->json([
                'message' => 'Categoría eliminada correctamente'
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $categoria = Categoria::find($id);
            if (!$categoria) {
                return response()->json(['error' => 'Categoría no encontrada'], 404);
            }

            $request->validate([
                'nombre' => 'required|string|max:255',
                'descripcion' => 'nullable|string',
                'activa' => 'required|boolean',
                'url_imagen' => 'nullable|image|max:2048',
            ]);

            if ($request->hasFile('url_imagen')) {
                if ($categoria->url_imagen && file_exists(public_path($categoria->url_imagen))) {
                    unlink(public_path($categoria->url_imagen));
                }
                $file = $request->file('url_imagen');
                $path = $file->store('categorias', 'public');
                $categoria->url_imagen = 'storage/' . $path;
            }

            $categoria->nombre = $request->nombre;
            $categoria->descripcion = $request->descripcion;
            $categoria->activa = $request->activa;
            $categoria->save();

            return response()->json([
                'message' => 'Categoría actualizada correctamente',
                'data' => $categoria
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
