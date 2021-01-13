<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    use HasFactory;

    protected $table = 'category_dtl';
    protected $primaryKey = 'category_dtl_id';
    // protected $category_hdr = 'category_hdr';
}
