<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class PromoCodeRecordController extends Controller
{
    public function index()
    {
        $data = DB::table('promo_code_record')
            ->join('customer', 'customer.customer_id', '=', 'promo_code_record.customer_id')
            ->select('promo_code_record.id', DB::raw('Concat("customer_firstname ", "customer_lastname") AS name'), 'promo_code_record.sales_hdr_id', 'promo_code_record.promo_code', 'promo_code_record.created_at', 'promo_code_record.updated_at')
            ->get();

        return response($data);
    }

    public function view()
    {
        return view('pages.backend.promo_code_record');
    }
}
