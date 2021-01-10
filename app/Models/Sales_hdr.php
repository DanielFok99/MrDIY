<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Sales_hdr extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'sales_order_hdr';

    protected $fillable = [
        'sales_hdr_id',
        'total',
        'payment_method',
        'address',
        'name',
        'contact_num',
        'email',
        'created_at',
    ];

}
