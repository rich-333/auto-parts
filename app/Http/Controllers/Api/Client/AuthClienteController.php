<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthClienteController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required',
                'apellido' => 'required',
                'email' => 'required|email|unique:usuarios,email',
                'password' => 'required|min:6'
            ]);

            $user = Usuario::create([
                'nombre' => $request->nombre,
                'apellido' => $request->apellido,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'rol' => 'Cliente',
                'activo' => 1
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Usuario registrado',
                'data' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = Usuario::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Inicio de sesión correcto',
            'data' => $user
        ]);
    }

    public function logout()
    {
        return response()->json([
            'success' => true,
            'message' => 'Sesión cerrada'
        ]);
    }
}