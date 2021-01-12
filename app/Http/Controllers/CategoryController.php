<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function view()
    {
        return view('pages.backend.category');
    }

    public function index()
    {
        $data = DB::table('category_hdr')
            ->select("*")
            ->get();

        return response($data);
    }

    public function store()
    {
        $category_hdr_id = request('category_hdr_id');
        $chk_category_hdr = DB::table('category_hdr')
            ->select('category_hdr_id')
            ->where('category_hdr_id', '=', $category_hdr_id)
            ->first();

        if ($chk_category_hdr == true) {
            return redirect('/category')->with('msg', 'Product exist.');
        } else {
            $staff = DB::table('category_hdr')
                ->insert([
                    'category_hdr_id' => $category_hdr_id,
                    'category_hdr_description' => request('category_hdr_description'),
                    'category_hdr_active' => 'yes',
                    'created_at' => now()
                ]);

            return redirect('/category')->with('msg', 'Product created.');
        }
    }

    public function update(Request $request)
    {
        $category_hdr_id = $request->edit_category_hdr_id;
        $category_hdr_description = $request->edit_category_hdr_description;

        $update = DB::table('category_hdr')
            ->where('category_hdr_id', '=', $category_hdr_id)
            ->update([
                'category_hdr_description' => $category_hdr_description
            ]);

        return redirect('/category');
    }

    public function active()
    {
        $category_hdr_id = request('category_hdr_id');
        $chk_category_hdr = DB::table('category_hdr')
            ->select('category_hdr_active')
            ->where('category_hdr_id', '=', $category_hdr_id)
            ->first();

        if ($chk_category_hdr->category_hdr_active == 'yes') {
            $active = DB::table('category_hdr')
                ->where('category_hdr_id', '=', $category_hdr_id)
                ->update(['category_hdr_active' => 'no']);
        } else {
            $active = DB::table('category_hdr')
                ->where('category_hdr_id', '=', $category_hdr_id)
                ->update(['category_hdr_active' => 'yes']);
        }

        return redirect('/category');
    }


    // Category Detail
    public function detail(Request $request)
    {
        $category_hdr_id = request('category_hdr_id');
        $detail = DB::table('category_dtl')
            ->where('category_hdr_id', '=', $category_hdr_id)
            ->get();
        return response($detail);
    }

    public function view_detail()
    {
        $category_hdr_id = request('category_hdr_id');
        return view('pages.backend.category_detail', ['category_hdr_id' => $category_hdr_id]);
    }

    public function store_detail()
    {
        $category_hdr_id = request('category_hdr_id');
        $category_dtl_id = request('category_dtl_id');
        $chk_category_dtl = DB::table('category_dtl')
            ->select('category_dtl_id')
            ->where('category_dtl_id', '=', $category_dtl_id)
            ->first();

        if ($chk_category_dtl == true) {
            return redirect()->route('category.view_detail', $category_hdr_id);
        } else {
            $staff = DB::table('category_dtl')
                ->insert([
                    'category_dtl_id' => $category_dtl_id,
                    'category_hdr_id' => $category_hdr_id,
                    'category_dtl_description' => request('category_dtl_description'),
                    'category_dtl_active' => 'yes',
                    'created_at' => now()
                ]);

            return redirect()->route('category.view_detail', $category_hdr_id);
        }
    }

    public function update_detail()
    {
        $category_hdr_id = request('edit_category_hdr_id');
        $category_dtl_id = request('edit_category_dtl_id');
        $category_dtl_description = request('edit_category_dtl_description');

        $update = DB::table('category_dtl')
            ->where('category_dtl_id', '=', $category_dtl_id)
            ->update([
                'category_dtl_description' => $category_dtl_description
            ]);

        return redirect()->route('category.view_detail', $category_hdr_id);
    }

    public function active_detail()
    {
        $category_hdr_id = '1';
        $category_dtl_id = request('category_dtl_id');

        $chk_category_dtl = DB::table('category_dtl')
            ->select('category_dtl_active')
            ->where('category_dtl_id', '=', $category_dtl_id)
            ->first();

        if ($chk_category_dtl->category_dtl_active == 'yes') {
            $active = DB::table('category_dtl')
                ->where('category_dtl_id', '=', $category_dtl_id)
                ->update(['category_dtl_active' => 'no']);
        } else {
            $active = DB::table('category_dtl')
                ->where('category_dtl_id', '=', $category_dtl_id)
                ->update(['category_dtl_active' => 'yes']);
        }

        return redirect()->route('category.view_detail', $category_hdr_id);
    }

}
