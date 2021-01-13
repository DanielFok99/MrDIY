<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class Customer extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $guarded = 'customer';

    protected $table = 'customer';

    public function username(): string
    {
        return 'email';
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

    protected $fillable = [
        'customer_firstname',
        'customer_lastname',
        'gender',
        'email',
        'contact',
        'address',
        'shipping_address',
        'status',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
