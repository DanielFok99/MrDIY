<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    use HasFactory;

    protected $category_dtl = 'category_dtl';
    protected $category_hdr = 'category_hdr';
}
