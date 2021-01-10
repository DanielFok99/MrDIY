<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StaffController extends Controller
{
    public function view()
    {
        return view('pages.staff_maintenance');
    }

    public function index()
    {
        $staff = DB::table('staff')
            ->select(DB::raw('CONCAT(staff_firstname," ", staff_lastname) as name'), 'staff_firstname', 'staff_lastname', 'staff_id', 'email', 'staff_active', 'created_at')
            ->get();
        return response($staff);
    }

    public function store(Request $request)
    {
        $staff_id = $request->staff_id;
        $first_name = $request->first_name;
        $last_name = $request->last_name;
        $email = $request->email;
        $password = $request->password;
        $confirm_password = $request->confirm_password;

        $ckh_id = DB::table('staff')
            ->select('id')
            ->orWhere('staff_id', '=', $staff_id)
            ->orWhere('email', '=', $email)
            ->first();
        if ($ckh_id == TRUE) {
            return redirect('/staff');
        } else {
            if ($password == $confirm_password) {
                $staff = DB::table('staff')
                    ->insert([
                        'staff_id' => $staff_id,
                        'email' => $email,
                        'staff_firstname' => $first_name,
                        'staff_lastname' => $last_name,
                        'password' => Hash::make($password),
                        'staff_active' => 'yes',
                        'created_at' => now()
                    ]);
                return redirect('/staff');
            } else {
                return redirect('/staff');
            }

        }
    }

    public function update(Request $request)
    {
        $staff_id = $request->edit_staff_id1;
        $first_name = $request->edit_firstname;
        $last_name = $request->edit_lastname;

        $update = DB::table('staff')
            ->where('staff_id', '=', $staff_id)
            ->update([
                'staff_firstname' => $first_name,
                'staff_lastname' => $last_name,
            ]);
        return redirect('/staff');
    }

    public function changePass(Request $request)
    {
        $staff_id = $request->id;
        $chg_pass = $request->chg_pass;
        $confirm_chg_pass = $request->confirm_chg_pass;

        if ($chg_pass == $confirm_chg_pass) {
            $update = DB::table('staff')
                ->where('staff_id', '=', $staff_id)
                ->update([
                    'password' => Hash::make($chg_pass),
                ]);
            return redirect('/staff');
        } else {
            return redirect('/staff');
        }
    }

    public function active()
    {
        $staff_id = request('id');
        $chk_staff = DB::table('staff')
            ->select('staff_active')
            ->where('staff_id', '=', $staff_id)
            ->first();

        if ($chk_staff->staff_active == 'yes') {
            $active = DB::table('staff')
                ->where('staff_id', '=', $staff_id)
                ->update(['staff_active' => 'no']);
            return redirect('/staff');
        } else {
            $active = DB::table('staff')
                ->where('staff_id', '=', $staff_id)
                ->update(['staff_active' => 'yes']);
            return redirect('/staff');
        }
    }
}
