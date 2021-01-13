<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class FrontProductController extends Controller
{
    public function index()
    {
        $category_hdrs = DB::table('category_hdr')
            ->select('category_hdr_description', 'category_hdr_id')
            ->where('category_hdr_active', '=', 'yes')
            ->get();

        $categoryHdr = collect();
        foreach ($category_hdrs as $item) {
            $hdr_id = $item->category_hdr_id;
            $details = collect();
            $category_dtl = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description', 'category_dtl.category_dtl_id')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();

            foreach ($category_dtl as $dtlItem) {
                $details->push($dtlItem);
            }


            $item->details = $details;
            $categoryHdr->push($item);
//            dd($item);
        }

        $new_product = Product::where('product_status', 'new')->take(8)->get();
        $hot_sales_product = Product::where('product_status', 'hot sales')->take(8)->get();
        $special_offer_product = Product::where('product_status', 'special offer')->take(8)->get();

        return view('pages.frontend.index', ['header' => $categoryHdr, 'new_product' => $new_product, 'hot_sales_product' => $hot_sales_product, 'special_offer_product' => $special_offer_product]);
    }

    public function category()
    {
        $category_dtl_id = request('category_dtl_id');

        $category_hdrs = DB::table('category_hdr')
            ->select('category_hdr_description', 'category_hdr_id')
            ->where('category_hdr_active', '=', 'yes')
            ->get();

        $categoryHdr = collect();
        foreach ($category_hdrs as $item) {
            $hdr_id = $item->category_hdr_id;
            $details = collect();
            $category_dtl = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description', 'category_dtl.category_dtl_id')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();

            foreach ($category_dtl as $dtlItem) {
                $details->push($dtlItem);
            }


            $item->details = $details;
            $categoryHdr->push($item);
//            dd($item);
        }

        if ($category_dtl_id != '0') {
            $category_products = DB::table('product')
                ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
                ->select('product.*', 'category_dtl.category_dtl_description')
                ->where('product.category_dtl_id', '=', $category_dtl_id)
                ->get();
        } else
        {
            $category_products = DB::table('product')
                ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
                ->select('product.*', 'category_dtl.category_dtl_description')
                ->get();
        }

        return view('pages.frontend.women', ['header' => $categoryHdr, 'category_product' => $category_products]);
    }

    public function detail()
    {
        $id = request('product_id');

        $category_hdrs = DB::table('category_hdr')
            ->select('category_hdr_description', 'category_hdr_id')
            ->where('category_hdr_active', '=', 'yes')
            ->get();

        $categoryHdr = collect();
        foreach ($category_hdrs as $item) {
            $hdr_id = $item->category_hdr_id;
            $details = collect();
            $category_dtl = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description', 'category_dtl.category_dtl_id')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();

            foreach ($category_dtl as $dtlItem) {
                $details->push($dtlItem);
            }


            $item->details = $details;
            $categoryHdr->push($item);
//            dd($item);
        }

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

//        dd($this_product);
        return view('pages.frontend.details', ['header' => $categoryHdr, 'this_product' => $this_product, 'this_review' => $review]);
    }
}
