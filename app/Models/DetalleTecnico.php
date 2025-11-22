<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetalleTecnico extends Model{
    protected $table = 'detalles_tecnicos';
    protected $primaryKey = 'id_detalle';

    protected $fillable = [
        'id_producto',
        'atributo',
        'valor'
    ];

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'id_producto');
    }
}
