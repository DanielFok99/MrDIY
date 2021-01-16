<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class CustomerController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/';

    public function userDetail()
    {

        $customer = Auth::guard('customer')->user();

        return view('pages.frontend.user')->with('customer', $customer);
    }

    public function updateDetail(Request $request): RedirectResponse
    {
        $customerId = Auth::guard('customer')->id();
        $firstName = trim($request->input('first_name'));
        $lastName = trim($request->input('last_name'));
        $email = trim($request->input('register_email'));
        $contact = trim($request->input('contact'));
        $rawGender = trim($request->input('gender'));
        $gender = null;
        if ($rawGender == '0') {
            $gender = 0;
        } elseif ($rawGender == '1') {
            $gender = 1;
        }
        $billingAddress = trim($request->input('billing_address'));
        $shippingAddress = trim($request->input('shipping_address'));

        $customer = Customer::query()->find($customerId);
        $customer->customer_firstname = $firstName;
        $customer->customer_lastname = $lastName;
        $customer->email = $email;
        $customer->contact = $contact;
        $customer->gender = $gender;
        $customer->address = $billingAddress;
        $customer->shipping_address = $shippingAddress;

        $customer->save();

        return redirect()->route('customer.detail');
    }

    public function showRegisterForm()
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
        
        
        return view('pages.frontend.register')->with('header',$categoryHdr);
    }

    public function register(Request $request)
    {
        $firstName = trim($request->input('first_name'));
        $lastName = trim($request->input('last_name'));
        $email = trim($request->input('register_email'));
        $contact = trim($request->input('contact'));
        $rawGender = trim($request->input('gender'));
        $gender = null;
        if ($rawGender == '0') {
            $gender = 0;
        } elseif ($rawGender == '1') {
            $gender = 1;
        }
        $password = trim($request->input('password'));
        $billingAddress = trim($request->input('billing_address'));
        $shippingAddress = trim($request->input('shipping_address'));

        $customer = Customer::query()
            ->firstOrCreate(
                ['email' => $email, 'contact' => $contact],
                [
                    'customer_firstname' => $firstName,
                    'customer_lastname' => $lastName,
                    'gender' => $gender,
                    'password' => Hash::make($password),
                    'status' => 'Active',
                    'address' => $billingAddress,
                    'shipping_address' => null,

                ]
            );
        if ($customer->wasRecentlyCreated) {
            return redirect('/');
        } else {
            return redirect()->back()->with('message', 'error')->withInput();
        }
    }

    public function login(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        $credentials = $request->only('email', 'password');
//        $email = $request->input('email');
//        $password = $request->input('password');

        if (Auth::guard('customer')->attempt($credentials, $request->get('remember'))) {
//        if (Auth::guard('customer')->attempt($credentials, true)) {
            return redirect()->intended('/');
        }
        return back()->withInput($request->only('email', 'remember'));

    }

    public function passwordUpdate(Request $request)
    {
        $oldPassword = $request->old_password;
        $password = $request->password;
        $confirmPassword = $request->confirm_password;

        if (strlen($password) > 7) {
            if ($password == $confirmPassword) {
                $customer = Customer::query()->find(Auth::guard('customer')->id());

                if (Hash::check($oldPassword, $customer->password)) {

                    $customer->password = Hash::make($password);
                    $customer->save();
                    return redirect()->route('customer.detail');
                    dd($request->input());
                }
            }
        }

        return redirect()->back()->withInput();

    }
}
