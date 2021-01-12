<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }

    public function index(Request $request)
    {

        if ($request->ajax()) {
            $data = Customer::all();
            try {
                return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('action', function ($row) {
                        $actionBtn = '
<a href="javascript:void(0)" class="edit btn btn-primary btn-sm">View</a>
<a href="javascript:void(0)" class="chat btn btn-success btn-sm">Chat</a>
<a href="javascript:void(0)" class="history btn btn-dark btn-sm">History</a>
<a href="javascript:void(0)" class="deactivate btn btn-danger btn-sm">Deactivate</a>
';
                        return $actionBtn;
                    })
                    ->rawColumns(['action'])
                    ->make(true);
            } catch (Exception $e) {
                return response($e);
            }
        }

        return view('pages.backend.customer_maintenance');
    }
}
