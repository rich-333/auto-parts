<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Descuento extends Model
{
    protected $table = 'descuentos';
    protected $primaryKey = 'id_descuento';
    public $timestamps = false;

    protected $fillable = [
        'id_producto',
        'tipo',
        'valor',
        'fecha_inicio',
        'fecha_fin',
        'activo'
    ];

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'id_producto');
    }

}
