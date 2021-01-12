<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>Clone MrDIY</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content=""/>

    {{--    Warning this is the Bootstrap 3--}}
    <link href="{{asset('assets/frontend/css/bootstrap.css')}}" rel='stylesheet' type='text/css'/>
    <link href="{{asset('css/frontend/app.css')}}" rel='stylesheet' type='text/css'/>
    <link href="{{asset('css/frontend2.css')}}" rel='stylesheet' type='text/css'/>
    @stack('css')

    <script type="text/javascript" src="{{asset('js/frontend/app.js')}}"></script>
    {{--<script type='text/javascript' src="{{asset('assets/js/jquery-1.11.1.min.js')}}"></script>--}}
    <script type="application/x-javascript">
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    {{--<script type="text/javascript" src="{{asset('js/app2.js')}}"></script>--}}
    <script type="text/javascript" src="{{asset('assets/frontend/js/megamenu.js')}}"></script>
    <script src="{{asset('assets/frontend/js/jquery.etalage.min.js')}}"></script>
    <script src="{{asset('assets/frontend/js/menu_jquery.js')}}"></script>
    <script src="{{asset('assets/frontend/js/simpleCart.min.js')}}"></script>
    <script>
        $(document).ready(function () {
            $(".megamenu").megamenu();
            $('#etalage').etalage({
                thumb_image_width: 300,
                thumb_image_height: 400,
                source_image_width: 900,
                source_image_height: 1200,
                show_hint: true,
                click_callback: function (image_anchor, instance_id) {
                    alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
                }
            });

        });
    </script>

</head>

<body>

<div id="app">
    <div class="top_bg">
        <div class="container">
            <div class="header_top">
                <div class="top_right">
                    <ul>
                        <li><a href="#">help</a></li>
                        |
                        <li><a href="{{route('contact')}}">Contact</a></li>
                        |
                        <li><a href="#">Delivery information</a></li>
                    </ul>
                </div>
                <div class="top_left">
                    <h2><span></span> Call us : 032 2352 782</h2>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="header_bg">
        <div class="container">
            <div class="header">
                <div class="head-t">
                    <div class="logo">
                        <a href="{{route('index')}}">
                            <img src="{{asset('assets/frontend/images/logo.png')}}" class="img-responsive" alt=""/>
                        </a>
                    </div>
                    <!-- start header_right -->
                    <div class="header_right">
                        <div class="rgt-bottom">
                            <div class="log">
                                <div class="login">
                                    <div id="loginContainer"><a href="#" id="loginButton"><span>Login</span></a>
                                        <div id="loginBox">
                                            <form id="loginForm">
                                                <fieldset id="body">
                                                    <fieldset>
                                                        <label for="email">Email Address</label>
                                                        <input type="text" name="email" id="email">
                                                    </fieldset>
                                                    <fieldset>
                                                        <label for="password">Password</label>
                                                        <input type="password" name="password" id="password">
                                                    </fieldset>
                                                    <input type="submit" id="login" value="Sign in">
                                                    <label for="checkbox"><input type="checkbox" id="checkbox"> <i>Remember
                                                            me</i></label>
                                                </fieldset>
                                                <span><a href="#">Forgot your password?</a></span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="reg">
                                <a href="{{route('register')}}">REGISTER</a>
                            </div>
                            <div class="cart box_1">
                                <a href="{{route('checkout')}}">
                                    <h3><span class="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity"
                                                                                           class="simpleCart_quantity">0</span>
                                        items)<img src="{{asset('assets/frontend/images/bag.png')}}" alt=""></h3>
                                </a>
                                <p><a href="javascript:" class="simpleCart_empty">(empty cart)</a></p>
                                <div class="clearfix"></div>
                            </div>
                            <div class="create_btn">
                                <a href="{{route('checkout')}}">CHECKOUT</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="search">
                            <form>
                                <label>
                                    <input type="text" value="" placeholder="search...">
                                </label>
                                <input type="submit" value="">
                            </form>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- start header menu -->
                <ul class="megamenu skyblue">
                    <li class="active grid"><a class="color1" href="{{route('index')}}">Home</a></li>
                    <li class="grid"><a class="color2" href="#">new arrivals</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Pools&Tees</a></li>
                                            <li><a href="{{route('women')}}">shirts</a></li>
                                            <li><a href="{{route('women')}}">shorts</a></li>
                                            <li><a href="{{route('women')}}">twinsets</a></li>
                                            <li><a href="{{route('women')}}">kurts</a></li>
                                            <li><a href="{{route('women')}}">jackets</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Handbag</a></li>
                                            <li><a href="{{route('women')}}">Slingbags</a></li>
                                            <li><a href="{{route('women')}}">Clutches</a></li>
                                            <li><a href="{{route('women')}}">Totes</a></li>
                                            <li><a href="{{route('women')}}">Wallets</a></li>
                                            <li><a href="{{route('women')}}">Laptopbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Belts</a></li>
                                            <li><a href="{{route('women')}}">Pens</a></li>
                                            <li><a href="{{route('women')}}">Eyeglasses</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">Watches</a></li>
                                            <li><a href="{{route('women')}}">Jewellery</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>
                    <li><a class="color4" href="#">TUXEDO</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Pools&Tees</a></li>
                                            <li><a href="{{route('women')}}">shirts</a></li>
                                            <li><a href="{{route('women')}}">shorts</a></li>
                                            <li><a href="{{route('women')}}">twinsets</a></li>
                                            <li><a href="{{route('women')}}">kurts</a></li>
                                            <li><a href="{{route('women')}}">jackets</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Handbag</a></li>
                                            <li><a href="{{route('women')}}">Slingbags</a></li>
                                            <li><a href="{{route('women')}}">Clutches</a></li>
                                            <li><a href="{{route('women')}}">Totes</a></li>
                                            <li><a href="{{route('women')}}">Wallets</a></li>
                                            <li><a href="{{route('women')}}">Laptopbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Belts</a></li>
                                            <li><a href="{{route('women')}}">Pens</a></li>
                                            <li><a href="{{route('women')}}">Eyeglasses</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">Watches</a></li>
                                            <li><a href="{{route('women')}}">Jewellery</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>
                    <li><a class="color5" href="#">SWEATER</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Pools&Tees</a></li>
                                            <li><a href="{{route('women')}}">shirts</a></li>
                                            <li><a href="{{route('women')}}">shorts</a></li>
                                            <li><a href="{{route('women')}}">twinsets</a></li>
                                            <li><a href="{{route('women')}}">kurts</a></li>
                                            <li><a href="{{route('women')}}">jackets</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Handbag</a></li>
                                            <li><a href="{{route('women')}}">Slingbags</a></li>
                                            <li><a href="{{route('women')}}">Clutches</a></li>
                                            <li><a href="{{route('women')}}">Totes</a></li>
                                            <li><a href="{{route('women')}}">Wallets</a></li>
                                            <li><a href="{{route('women')}}">Laptopbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Belts</a></li>
                                            <li><a href="{{route('women')}}">Pens</a></li>
                                            <li><a href="{{route('women')}}">Eyeglasses</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">Watches</a></li>
                                            <li><a href="{{route('women')}}">Jewellery</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>
                    <li><a class="color6" href="#">SHOES</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Pools&Tees</a></li>
                                            <li><a href="{{route('women')}}">shirts</a></li>
                                            <li><a href="{{route('women')}}">shorts</a></li>
                                            <li><a href="{{route('women')}}">twinsets</a></li>
                                            <li><a href="{{route('women')}}">kurts</a></li>
                                            <li><a href="{{route('women')}}">jackets</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Handbag</a></li>
                                            <li><a href="{{route('women')}}">Slingbags</a></li>
                                            <li><a href="{{route('women')}}">Clutches</a></li>
                                            <li><a href="{{route('women')}}">Totes</a></li>
                                            <li><a href="{{route('women')}}">Wallets</a></li>
                                            <li><a href="{{route('women')}}">Laptopbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Belts</a></li>
                                            <li><a href="{{route('women')}}">Pens</a></li>
                                            <li><a href="{{route('women')}}">Eyeglasses</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">Watches</a></li>
                                            <li><a href="{{route('women')}}">Jewellery</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>

                    <li><a class="color7" href="#">GLASSES</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Pools&Tees</a></li>
                                            <li><a href="{{route('women')}}">shirts</a></li>
                                            <li><a href="{{route('women')}}">shorts</a></li>
                                            <li><a href="{{route('women')}}">twinsets</a></li>
                                            <li><a href="{{route('women')}}">kurts</a></li>
                                            <li><a href="{{route('women')}}">jackets</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Handbag</a></li>
                                            <li><a href="{{route('women')}}">Slingbags</a></li>
                                            <li><a href="{{route('women')}}">Clutches</a></li>
                                            <li><a href="{{route('women')}}">Totes</a></li>
                                            <li><a href="{{route('women')}}">Wallets</a></li>
                                            <li><a href="{{route('women')}}">Laptopbags</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">Belts</a></li>
                                            <li><a href="{{route('women')}}">Pens</a></li>
                                            <li><a href="{{route('women')}}">Eyeglasses</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">Watches</a></li>
                                            <li><a href="{{route('women')}}">Jewellery</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>

                    <li><a class="color8" href="#">T-SHIRT</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>
                    <li><a class="color9" href="#">WATCHES</a>
                        <div class="megapanel">
                            <div class="row">
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Clothing</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>kids</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Bags</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>account</h4>
                                        <ul>
                                            <li><a href="#">login</a></li>
                                            <li><a href="{{route('register')}}">create an account</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                            <li><a href="{{route('women')}}">my shopping bag</a></li>
                                            <li><a href="{{route('women')}}">brands</a></li>
                                            <li><a href="{{route('women')}}">create wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Accessories</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">trends</a></li>
                                            <li><a href="{{route('women')}}">sale</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col1">
                                    <div class="h_nav">
                                        <h4>Footwear</h4>
                                        <ul>
                                            <li><a href="{{route('women')}}">new arrivals</a></li>
                                            <li><a href="{{route('women')}}">men</a></li>
                                            <li><a href="{{route('women')}}">women</a></li>
                                            <li><a href="{{route('women')}}">accessories</a></li>
                                            <li><a href="{{route('women')}}">kids</a></li>
                                            <li><a href="{{route('women')}}">style videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col2"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                                <div class="col1"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    @yield('content')


    <div class="foot-top">
        <div class="container">
            <div class="col-md-6 s-c">
                <li>
                    <div class="fooll">
                        <h5>follow us on</h5>
                    </div>
                </li>
                <li>
                    <div class="social-ic">
                        <ul>
                            <li><a href="#"><i class="facebok"> </i></a></li>
                            <li><a href="#"><i class="twiter"> </i></a></li>
                            <li><a href="#"><i class="goog"> </i></a></li>
                            <li><a href="#"><i class="be"> </i></a></li>
                            <li><a href="#"><i class="pp"> </i></a></li>
                            <div class="clearfix"></div>
                        </ul>
                    </div>
                </li>
                <div class="clearfix"></div>
            </div>
            <div class="col-md-6 s-c">
                <div class="stay">
                    <div class="stay-left">
                        <form>
                            <label>
                                <input type="text" placeholder="Enter your email to join our newsletter" required="">
                            </label>
                        </form>
                    </div>
                    <div class="btn-1">
                        <form>
                            <input type="submit" value="join">
                        </form>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="col-md-3 cust">
                <h4>CUSTOMER CARE</h4>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="buy.html">How To Buy</a></li>
                <li><a href="#">Delivery</a></li>
            </div>
            <div class="col-md-2 abt">
                <h4>ABOUT US</h4>
                <li><a href="#">Our Stories</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="{{route('contact')}}">Contact</a></li>
            </div>
            <div class="col-md-2 myac">
                <h4>MY ACCOUNT</h4>
                <li><a href="{{route('register')}}">Register</a></li>
                <li><a href="#">My Cart</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="buy.html">Payment</a></li>
            </div>
            <div class="col-md-5 our-st">
                <div class="our-left">
                    <h4>OUR STORES</h4>
                </div>
                <div class="our-left1">
                    <div class="cr_btn">
                        <a href="#">SOLO</a>
                    </div>
                </div>
                <div class="our-left1">
                    <div class="cr_btn1">
                        <a href="#">BOGOR</a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <li><i class="add"> </i>Jl. Haji Muhidin, Blok G no.69</li>
                <li><i class="phone"> </i>025-2839341</li>
                <li><a href="mailto:info@example.com"><i class="mail"> </i>info@sitename.com </a></li>

            </div>
            <div class="clearfix"></div>
            <p>Copyrights © {{date('yy')}}. All rights reserved
            </p>
        </div>
    </div>
</div>


<script type="module">

    Vue.use(Chat);
    const app = new Vue({
        el: '#app',
    });
</script>
@stack('js')
</body>

</html>
