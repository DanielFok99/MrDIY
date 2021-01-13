<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        return view('pages.frontend.register');
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
