<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Staff Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="{{asset('assets/images/icon/favicon.ico')}}">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/app2.css')}}">
    {{--    <!-- modernizr css -->--}}
    {{--    <script src="{{asset('assets/js/vendor/modernizr-2.8.3.min.js')}}"></script>--}}

</head>

<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->
<!-- preloader area start -->
<div id="preloader">
    <div class="loader"></div>
</div>
<!-- preloader area end -->
<!-- login area start -->
<div class="login-area login-bg">
    <div class="container">
        <div class="login-box ptb--100">
            <form method="post" action="{{route('login')}}">
                @csrf
                <div class="login-form-head">
                    <h4>MrDIY Backend System</h4>
                </div>
                <div class="login-form-body">
                    <div class="form-gp pb-3">
                        <label for="inputUsername">Username</label>
                        <input type="text" name="username" id="inputUsername" value=""
                               class="form-control @error('username') is-invalid @enderror" required
                               autocomplete="username">
                        @error('username')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror

                    </div>
                    <div class="form-gp pb-3">
                        <label for="inputPassword">Password</label>
                        <input type="password" id="inputPassword" name="password" value=""
                               class="form-control @error('password') is-invalid @enderror" required
                               autocomplete="current-password">
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="row mb-4 rmber-area">
                        <div class="col-6">
                            {{--                            <div class="custom-control custom-checkbox mr-sm-2">--}}
                            {{--                                <input type="checkbox" class="custom-control-input" name="remember_me" id="rememberMe">--}}
                            {{--                                <label class="custom-control-label" for="rememberMe">Remember Me</label>--}}
                            {{--                            </div>--}}
                        </div>

                        <div class="col-6 text-right">
                            @if (Route::has('password.request'))
                                <a href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            @endif
                            {{--                            <a href="">Forgot Password?</a>--}}
                        </div>
                    </div>
                    <div class="submit-btn-area">
                        <button id="form_submit" type="submit">SIGN IN<i class="ti-arrow-right"></i></button>
                    </div>
                    {{--                    <div class="form-footer text-center mt-5">--}}
                    {{--                        <p class="text-muted">Don't have an account? <a href="register.html">Sign up</a></p>--}}
                    {{--                    </div>--}}
                </div>
            </form>
        </div>
    </div>
</div>
<!-- login area end -->

<!-- jquery latest version -->
{{--<script src="assets/js/vendor/jquery-2.2.4.min.js"></script>--}}
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/app2.js')}}"></script>

</body>

</html>
