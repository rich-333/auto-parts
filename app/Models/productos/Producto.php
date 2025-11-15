<?
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';
    protected $primaryKey = 'id_producto';

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'stock',
        'id_categoria',
        'id_marca',
        'activo'
    ];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'id_categoria');
    }

    public function marca()
    {
        return $this->belongsTo(Marca::class, 'id_marca');
    }

    public function detalles()
    {
        return $this->hasMany(DetalleTecnico::class, 'id_producto');
    }

    public function imagenes()
    {
        return $this->hasMany(ImagenProducto::class, 'id_producto');
    }

    public function favoritos()
    {
        return $this->hasMany(Favorito::class, 'id_producto');
    }

    public function carrito()
    {
        return $this->hasMany(Carrito::class, 'id_producto');
    }

    public function calificaciones()
    {
        return $this->hasMany(Calificacion::class, 'id_producto');
    }

    public function detallePedidos()
    {
        return $this->hasMany(DetallePedido::class, 'id_producto');
    }
}

?>