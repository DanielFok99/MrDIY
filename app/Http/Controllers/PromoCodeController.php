<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PromoCodeController extends Controller
{
    public function index()
    {
        $promo = DB::table('promo_code')
            ->get();
        return response($promo);
    }

    public function view()
    {
        return view('pages.backend.promo_code_maintenance');
    }

    public function store(Request $request)
    {
        $promo_code = $request->promo_code;
        $rate = $request->rate;
        $type = $request->type;
        $expired_date = $request->expired_date;

        $chk_promo_code = DB::table('promo_code')
            ->select('id')
            ->where('promo_code', '=', $promo_code)
            ->first();

        if ($chk_promo_code == False) {
            $store = DB::table('promo_code')
                ->insert(['promo_code' => $promo_code, 'rate' => $rate, 'type' => $type, 'expired_date' => $expired_date, 'active' => 'yes', 'created_at' => now(), 'updated_at' => now()]);
            return redirect('/promo_code');
        } else {
            return response('gg');
        }


    }

    public function update(Request $request)
    {
        $promo_code = $request->edit_promo_code1;
        $rate = $request->edit_rate;
        $type = $request->edit_type;
        $expired_date = $request->edit_expired_date;

        $update = DB::table('promo_code')
            ->where('promo_code', '=', $promo_code)
            ->update(['rate' => $rate, 'type' => $type, 'expired_date' => $expired_date, 'updated_at' => now()]);

        return redirect('/promo_code');
    }

    public function active()
    {
        $promo_code = request('promo_code');

        $chk_active = DB::table('promo_code')
            ->select('active')
            ->where('promo_code', '=', $promo_code)
            ->first();

        if ($chk_active->active == 'yes') {
            $update_active = DB::table('promo_code')
                ->where('promo_code', '=', $promo_code)
                ->update(['active' => 'no']);
            return redirect('/promo_code');
        } else {
            $update_active = DB::table('promo_code')
                ->where('promo_code', '=', $promo_code)
                ->update(['active' => 'yes']);
            return redirect('/promo_code');
        }
    }

    public function destroy()
    {
        $promo_code = request('promo_code');

        $delete = DB::table('promo_code')
            ->where('promo_code', '=', $promo_code)
            ->delete();

        return redirect('/promo_code');
    }
}

