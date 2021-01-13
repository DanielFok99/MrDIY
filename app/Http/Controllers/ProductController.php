<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function view()
    {
        $categories = DB::table('category_dtl')
            ->select('category_dtl_id', 'category_dtl_description')
            ->where('category_dtl_active', '=', 'yes')
            ->get();

        return view('pages.backend.product')->with('categories', $categories);
    }

    public function index()
    {
        $product = DB::table('product')
            ->join('category_dtl', 'category_dtl.category_dtl_id', '=', 'product.category_dtl_id')
            ->select('product.*', 'category_dtl.category_dtl_description')
            ->get();

        return response($product);
    }

    public function store(Request $request)
    {
        $product_id = request('product_id');
        $chk_product = DB::table('product')
            ->select('product_id')
            ->where('product_id', '=', $product_id)
            ->first();

        if ($chk_product == true) {
            return redirect('/product');
        } else {
            $product = new Product();

            $product->product_id = request('product_id');
            $product->product_name = request('product_name');
            $product->product_description = request('product_description');
            $product->price = request('price');
            $product->category_dtl_id = request('category_dtl_id');
            $product->quantity = request('quantity');
            $product->rate = '0';
            $product->image_url = '/temperory';
            $product->gallery_url = '/temperory';
            $product->product_status = request('product_status');
            $product->product_active = 'yes';

            // dd($request->input());
            // Image handling
            // if($request->hasFile('image_file'))
            // {
            //     if($request->file('image_file')->isValid())
            //     {
            //        dd($request->file('image_file'));
            //         $extension = $request->image_file->extension();
            //         $request->image_file->storeAs("/product/".$product->product_id, $validated['name'].".".$extension);
            //     }
            //     // return redirect('/category');
            // }
            // else
            // {
            //     return redirect('/review');
            // }

            $product->save();

            return redirect('/product');
        }
    }

    public function update(Request $request)
    {
        $product_id = $request->edit_product_id;
        $product_name = $request->edit_product_name;
        $product_description = $request->edit_product_description;
        $price = $request->edit_price;
        $category = $request->edit_category;
        $quantity = $request->edit_quantity;

        $update = DB::table('product')
            ->where('product_id', '=', $product_id)
            ->update([
                'product_name' => $product_name,
                'product_description' => $product_description,
                'price' => $price,
                'category_dtl_id' => $category,
                'quantity' => $quantity,
            ]);
        return redirect('/product');
    }

    public function active()
    {
        $product_id = request('product_id');
        $chk_product = DB::table('product')
            ->select('product_active')
            ->where('product_id', '=', $product_id)
            ->first();

        if ($chk_product->product_active == 'yes') {
            $active = DB::table('product')
                ->where('product_id', '=', $product_id)
                ->update(['product_active' => 'no']);
        } else {
            $active = DB::table('product')
                ->where('product_id', '=', $product_id)
                ->update(['product_active' => 'yes']);
        }

        return redirect('/product');
    }

}
