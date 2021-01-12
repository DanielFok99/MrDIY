@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    <div class="container">
        <div class="main">
            <!-- start registration -->
            <div class="registration">
                <div class="registration_left">
                    <h2>new user? <span> create an account </span></h2>
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
                        <form id="registration_form" action="{{route('customer.register')}}" method="post">
                            @csrf
                            <div>
                                <label>
                                    <input name="first_name" placeholder="First Name:" type="text" required autofocus>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="last_name" placeholder="Last Name:" type="text" required autofocus>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="email" placeholder="Email Address:" type="email" required>
                                </label>
                            </div>
                            <div class="sky-form">
                                <div class="sky_form1">
                                    <ul>
                                        <li><label class="radio left"><input type="radio" name="gender" value="0"
                                                                             checked=""><i></i>Male</label></li>
                                        <li><label class="radio"><input type="radio" name="gender" value="1"><i></i>Female</label>
                                        </li>
                                        <div class="clearfix"></div>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label>
                                    <input name="contact" placeholder="Contact" type="tel" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="billing_address" placeholder="Billing Address" type="text" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="password" placeholder="Password" type="password" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input placeholder="Retype Password" type="password" required>
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="create an account" id="register-submit">
                            </div>
                            <div class="sky-form">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>i agree to
                                    shoppe.com &nbsp;<a class="terms" href="#"> terms of service</a> </label>
                            </div>
                        </form>
                        <!-- /Form -->
                    </div>
                </div>
                <div class="registration_left">
                    <h2>existing user</h2>
                    <div class="registration_form">
                        <!-- Form -->
                        <form id="registration_form" action="{{route('customer.login')}}" method="post">
                            @csrf
                            <div>
                                <label>
                                    <input placeholder="Email:" name="email" type="email" required>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input placeholder="Password" name="password" type="password" required>
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="sign in" id="register-submit">
                            </div>
                            <div class="forget">
                                <a href="#">forgot your password</a>
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


