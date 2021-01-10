<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Staff extends Model
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
