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
            ->where('customer_id','=',$customer_id)
            ->first();
        if($cart == TRUE){
            $chk_product = DB::table('shopping_cart_dtl')
                ->select('quantity','price','total')
                ->where('product_id','=',$product_id)
                ->where('cart_hdr_id','=',$cart->id)
                ->first();
            if($chk_product == TRUE){
                $quantity = $chk_product->quantity +1 ;
                $new_total = $quantity* $cart->price;
                $update_product = DB::table('shopping_cart_dtl')
                    ->where('cart_hdr_id','=',$cart->id)
                    ->where('product_id','=',$product_id)
                    ->update(['quantity'=>$quantity,'total'=>$new_total]);
            }else{
                
            }
        }else{

        }
    }
}
