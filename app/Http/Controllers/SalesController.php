<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class  SalesController extends Controller
{
    public function view()
    {
        return view('pages.backend.sales_list');
    }

    public function index()
    {
        $data = DB::table('sales_order_hdr')
            ->select("*")
            ->get();

        return response($data);
    }

    public function sales_detail(Request $request)
    {
        $hdr_id = $request->id;
        $detail = DB::table('sales_order_dtl')
            ->join('product', 'product.product_id', '=', 'sales_order_dtl.product_id')
            ->select('sales_order_dtl.active', 'product.product_name', 'sales_order_dtl.sales_dtl_id', 'sales_order_dtl.quantity', 'sales_order_dtl.price', 'sales_order_dtl.total', 'sales_order_dtl.created_at')
            ->where('sales_order_dtl.sales_hdr_id', '=', $hdr_id)
            ->get();
        return response($detail);
    }

    public function viewDetail()
    {
        $id = request('id');
        return view('pages.backend.sales_detail', ['id' => $id]);
    }

    public function activeSalesGroup(Request $request)
    {
        $id = request('id');
        $ckh = DB::table('sales_order_hdr')
            ->select('active')
            ->where('sales_hdr_id', '=', $id)
            ->first();
        if ($ckh->active == 'yes') {
            $active = DB::table('sales_order_hdr')
                ->where('sales_hdr_id', '=', $id)
                ->update(['active' => 'no']);
            $active_all = DB::table('sales_order_dtl')
                ->where('sales_hdr_id', '=', $id)
                ->update(['active' => 'no']);
        } else {
            $active = DB::table('sales_order_hdr')
                ->where('sales_hdr_id', '=', $id)
                ->update(['active' => 'yes']);
            $active_all = DB::table('sales_order_dtl')
                ->where('sales_hdr_id', '=', $id)
                ->update(['active' => 'yes']);
        }
        return redirect('/sales/list');
    }

    public function activeSalesDtl(Request $request)
    {
        $dtl_id = request('id');
        $ckh = DB::table('sales_order_dtl')
            ->select('active', 'sales_hdr_id')
            ->where('sales_dtl_id', '=', $dtl_id)
            ->first();
        if ($ckh->active == 'yes') {
            $active_all = DB::table('sales_order_dtl')
                ->where('sales_dtl_id', '=', $dtl_id)
                ->update(['active' => 'no']);
        } else {
            $active_all = DB::table('sales_order_dtl')
                ->where('sales_dtl_id', '=', $dtl_id)
                ->update(['active' => 'yes']);
        }
        return redirect('/sales/detail/' . $ckh->sales_hdr_id);
    }
}
