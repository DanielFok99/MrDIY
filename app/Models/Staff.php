<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Staff extends Authenticatable
{
    use HasFactory;

    protected $table = 'staff';

    protected $fillable = [
        'email',
        'staff_firstname',
        'staff_lastname',
        'staff_active',
    ];

    protected $hidden = [
        'password'
    ];


}
