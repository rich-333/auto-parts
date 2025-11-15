<?
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model {
    protected $table = 'pedidos';
    protected $primaryKey = 'id_pedido';

    protected $fillable = [
        'id_usuario',
        'estado',
        'metodo_pago',
        'total'
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario');
    }

    public function detalles()
    {
        return $this->hasMany(DetallePedido::class, 'id_pedido');
    }
}
?>