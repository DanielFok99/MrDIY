<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Customer extends Model
{
    use HasFactory,Notifiable;

    protected $table = 'customer';

    protected $fillable = [
        'customer_id',
        'customer_firstname',
        'customer_lastname',
        'email',
        'contact',
        'address',
        'status',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
