<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    public function store()
    {
//        if(Auth::check()){
//
//        }else{
//
//        }

        $product_id = request('product_id');
        $customer_id = Auth::user()->id;
        $cart = DB::table('shopping_cart_hdr')
            ->select('id','total')
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
                $new_total = $quantity* $chk_product->price;
                $old_total = $cart->total + $chk_product->price;
                $update_hdr = DB::table('shopping_cart_hdr')
                    ->where('id','=',$cart->id)
                    ->update(['total'=>$old_total]);
                $update_product = DB::table('shopping_cart_dtl')
                    ->where('cart_hdr_id','=',$cart->id)
                    ->where('product_id','=',$product_id)
                    ->update(['quantity'=>$quantity,'total'=>$new_total]);
                return response('cart have');
            }else{
                $product = DB::table('product')
                    ->select('product_id','price')
                    ->where('product_id','=',$product_id)
                    ->first();
                $price = $product->price;
                $old_total = $cart->total + $price;
                $update_hdr = DB::table('shopping_cart_hdr')
                    ->where('id','=',$cart->id)
                    ->update(['total'=>$old_total]);
                $update_product = DB::table('shopping_cart_dtl')
                    ->insert(['cart_hdr_id'=>$cart->id,'quantity'=>'1','product_id'=>$product_id,'price'=>$price,'total'=>$price,'created_at'=>now()]);
                return response('update');
            }
        }else{
            $product = DB::table('product')
                ->select('product_id','price')
                ->where('product_id','=',$product_id)
                ->first();
            $price = $product->price;
            $hdr_cart = DB::table('shopping_cart_hdr')
                ->insert(['customer_id'=>$customer_id,'total'=>$price,'created_at'=>now()]);
            $old_hdr = DB::table('shopping_cart_hdr')
                ->select('id')
                ->orderByDesc('id')
                ->first();
            $now_hdr = $old_hdr->id ;
            $update_product = DB::table('shopping_cart_dtl')
                ->insert(['cart_hdr_id'=>$now_hdr,'quantity'=>'1','product_id'=>$product_id,'price'=>$price,'total'=>$price,'created_at'=>now()]);
            return response('done');
        }
    }

    public function destroy()
    {

        $dtl_id = request('id');
        $delete_product = DB::table('shopping_cart_dtl')
            ->where('id','=',$dtl_id)
            ->delete();
    }

    public function destroyAll()
    {
        $customer_id = Auth::guard('customer')->user()->id;
        $dtl = DB::table('shopping_cart_hdr')
            ->select('id')
            ->first();
        $delete_product = DB::table('shopping_cart_dtl')
            ->where('cart_hdr_id','=',$dtl->id)
            ->delete();
    }

    public function index()
    {
        $category_hdrs = DB::table('category_hdr')
            ->select('category_hdr_description','category_hdr_id')
            ->where('category_hdr_active','=','yes')
            ->get();

//        $hdr_id = $hdr->category_hdr_id;
//        $hdr_id = 1;
//        $result = DB::table('category_hdr')
//            ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
//            ->select('category_dtl.category_dtl_description')
//            ->where('category_hdr.category_hdr_active', '=', 'yes')
//            ->where('category_dtl.category_dtl_active', '=', 'yes')
//            ->where('category_hdr.category_hdr_id', '=', $hdr_id)
//            ->get();

        $categoryHdr = collect();
        foreach ($category_hdrs as $item){
            $hdr_id =  $item->category_hdr_id;
            $details = collect();
            $category_dtl = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description','category_dtl.category_dtl_id')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();

            foreach ($category_dtl as $dtlItem){
                $details->push($dtlItem);
            }


            $item->details = $details;
            $categoryHdr->push($item);
//            dd($item);
        }

        $customer_id = Auth::guard('customer')->user()->id;
        $get_hdr = DB::table('shopping_cart_hdr')
            ->select('id')
            ->where('customer_id', '=', $customer_id)
            ->first();
        $product = DB::table('shopping_cart_dtl')
            ->join('product','product.product_id','=','shopping_cart_dtl.product_id')
            ->select('shopping_cart_dtl.id','shopping_cart_dtl.product_id','product.product_name','shopping_cart_dtl.quantity','shopping_cart_dtl.price','shopping_cart_dtl.total')
            ->where('shopping_cart_dtl.cart_hdr_id','=',$get_hdr->id)
            ->get();
        $total = 0;
        foreach ($product as $item){
            $total = $total+$item->total;
        }

        if ($product == TRUE){
            return view('pages.frontend.checkout',['products'=>$product,'total'=>$total,'promo'=>'---','last_total'=>$total,'header'=>$categoryHdr]);
        }else{
            return view('pages.frontend.checkout',['products'=>'','total'=>'0','promo'=>'---','last_total'=>'0','header'=>$categoryHdr]);
        }
    }

    public function add_promo(Request $request)
    {
        $promo_code = $request->promo_code;
        $customer_id = Auth::user()->id;
        $chk_promo = DB::table('promo_code')
            ->select('rate','type')
            ->where('promo_code','=',$promo_code)
            ->where('active','=','yes')
            ->first();
        $cart_total = DB::table('shopping_cart_hdr')
            ->select('total')
            ->where('customer_id','=',$customer_id)
            ->first();

        if($chk_promo == TRUE){
            $update_cart = DB::table('shopping_cart_hdr')
                ->where('customer_id','=',$customer_id)
                ->update(['promo_code'=>$promo_code]);
            $last_total = $cart_total->total - $promo_code->rate;
            return redirect('/shopping_cart',['last_total'=>$last_total,'promo'=>$promo_code->rate]);
        }else{
            return redirect('/shopping_cart');
        }
    }

    public function make_payment()
    {
        return view('pages.frontend.make_payment');
    }
}
