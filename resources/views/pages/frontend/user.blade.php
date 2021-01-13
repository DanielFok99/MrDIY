@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    <div class="container">
        <div class="main">
            <!-- start registration -->
            <div class="registration">
                <div class="registration_left">

                    <h2>Account Details</h2>

                    <!-- [if IE]
                            < link rel='stylesheet' type='text/css' href='ie.css'/>
                         [endif] -->

                    <!-- [if lt IE 7]>
                        < link rel='stylesheet' type='text/css' href='ie6.css'/>
                    <! [endif] -->
                    <script>
                        (function () {

                        })();
                    </script>
                    <div class="registration_form">
                        <!-- Form -->
                        <form id="registration_form" action="{{route('customer.detail.update')}}" method="post">
                            @csrf
                            <div>
                                <label>
                                    <input name="first_name" value="{{$customer->customer_firstname}}"
                                           placeholder="First Name:"
                                           type="text" required autofocus>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="last_name" value="{{$customer->customer_lastname}}"
                                           placeholder="Last Name:"
                                           type="text" required autofocus>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="register_email" value="{{$customer->email}}"
                                           placeholder="Email Address:"
                                           type="email" required>
                                </label>
                            </div>
                            <div class="sky-form">
                                <div class="sky_form1">
                                    <ul>
                                        @if($customer->gender == 0)
                                            <li><label class="radio left"><input type="radio" name="gender" value="0"
                                                                                 checked=""><i></i>Male</label></li>
                                            <li><label class="radio"><input type="radio" name="gender" value="1"><i></i>Female</label>
                                            </li>
                                        @elseif($customer->gender == '1')
                                            <li><label class="radio left"><input type="radio" name="gender" value="0"
                                                    ><i></i>Male</label></li>
                                            <li><label class="radio"><input type="radio" name="gender" value="1"
                                                                            checked=""><i></i>Female</label>
                                            </li>
                                        @else
                                            <li><label class="radio left"><input type="radio" name="gender" value="0"
                                                                                 checked=""><i></i>Male</label></li>
                                            <li><label class="radio"><input type="radio" name="gender" value="1"><i></i>Female</label>
                                            </li>
                                        @endif
                                        <div class="clearfix"></div>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label>
                                    <input name="contact" value="{{$customer->contact}}" placeholder="Contact"
                                           type="tel"
                                           required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="billing_address" value="{{$customer->address}}"
                                           placeholder="Billing Address" type="text" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="shipping_address" value="{{$customer->shipping_address}}"
                                           placeholder="Shipping Address" type="text">
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="Update Detail" id="register-submit">
                            </div>
                        </form>
                        <!-- /Form -->
                    </div>
                </div>
                <div class="registration_left">
                    <h2>Change Password</h2>
                    <div class="registration_form">
                        <!-- Form -->
                        <form id="registration_form" action="{{route('customer.password.update')}}" method="post">
                            @csrf
                            <div>
                                <label>
                                    <input placeholder="Old Password" value="{{old('old_password')}}"
                                           name="old_password" type="password"
                                           required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input placeholder="New Password" name="password" type="password" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input placeholder="Confirm Password" name="confirm_password" type="password"
                                           required>
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="Save" id="register-submit">
                            </div>
                        </form>
                        <!-- /Form -->
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- end registration -->
        </div>
    </div>
@endsection

@push('js')

@endpush


