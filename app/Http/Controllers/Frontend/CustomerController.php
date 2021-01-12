<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Hash;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function register(Request $request)
    {
        $firstName = trim($request->input('first_name'));
        $lastName = trim($request->input('last_name'));
        $email = trim($request->input('email'));
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
        return redirect('/');
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');


        dd($request->input());
    }
}
