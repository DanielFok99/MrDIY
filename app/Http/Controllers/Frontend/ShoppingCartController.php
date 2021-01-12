<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    public function store(Request $request)
    {
        $product_id = $request->product_id;
        $customer_id = Auth::user()->customer_id;
        $cart = DB::table('shopping_cart_hdr')
            ->select('id')
            ->where('')
            ->get();
    }
}
