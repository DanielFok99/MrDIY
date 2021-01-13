<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FrontProductController extends Controller
{
    public function index()
    {
        $new_product = Product::where('product_status', 'new')->take(8)->get();
        $hot_sales_product = Product::where('product_status', 'hot sales')->take(8)->get();
        $special_offer_product = Product::where('product_status', 'special offer')->take(8)->get();
        
        return view('pages.frontend.index', ['new_product' => $new_product, 'hot_sales_product' => $hot_sales_product, 'special_offer_product' => $special_offer_product]);
    }

    public function category()
    {
        $category_dtl_id = request('category_dtl_id');
        
        if($category_dtl_id != '0')
        {
            $category_products = DB::table('product')
                ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
                ->select('product.*', 'category_dtl.category_dtl_description')
                ->where('product.category_dtl_id', '=', $category_dtl_id)
                ->get();
        }
        else
        {
            $category_products = DB::table('product')
                ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
                ->select('product.*', 'category_dtl.category_dtl_description')
                ->get();
        }

        return view('pages.frontend.women', ['category_product' => $category_products]);
    }

    public function detail()
    {
        $id = request('product_id');

        $this_product = DB::table('product')
            ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
            ->select('product.*', 'category_dtl.category_dtl_description')
            ->where('product.product_id', '=', $id)
            ->get();

        $review = DB::table('review')
            ->join('product', 'product.product_id', '=', 'review.product_id')
            ->join('customer', 'customer.id', '=', 'review.customer_id')
            ->select('review.*', 'product.product_id', 'customer.customer_firstname', 'customer.customer_lastname')
            ->where('review.product_id', '=', $id)
            ->get();

        return view('pages.frontend.details', ['this_product' => $this_product, 'this_review' => $review]);
    }
}
