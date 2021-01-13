@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    @csrf
    <div class="arriv">
        <div class="container">
            <div class="arriv-top">
                <div class="col-md-6 arriv-left">
                    <img src="{{asset('assets/frontend/images/1.jpg')}}" class="img-responsive" alt="">
                    <div class="arriv-info">
                        <h3>Products</h3>
                        <p>WE SELL ALL THE THINGS YOU NEED FOR YOUR LIFE</p>
                        <div class="crt-btn">
                            <a href="{{route('front_product.category', '0')}}">TAKE A LOOK</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 arriv-right">
                    <img src="{{asset('assets/frontend/images/2.jpg')}}" class="img-responsive" alt="">
                    <div class="arriv-info">
                        <h3>TUXEDO</h3>
                        <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
                        <div class="crt-btn">
                            <a href="{{route('front_product.category', '0')}}">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="special">
        <div class="container">
            <h3>New Arrival</h3>
            <div class="specia-top">
                <ul class="grid_2">
                        <!-- blade function -->
                        @foreach($new_product as $product)
                            <li>
                                <a href="{{route('front_product.detail', $product['product_id'])}}"><img src="{{asset('assets/frontend/images/8.jpg')}}" class="img-responsive" alt=""></a>
                                <div class="special-info grid_1 simpleCart_shelfItem">
                                    <h5>{{ $product['product_name'] }}</h5>
                                    <div class="item_add"><span class="item_price"><h6>RM {{ $product['price'] }}</h6></span></div>
                                    <div class="item_add"><span class="item_price"><a href="#">Add to Cart</a></span></div>
                                </div>
                            </li>
                        @endforeach
                        <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    </div>
    <div class="special">
        <div class="container">
            <h3>Hot Sales</h3>
            <div class="specia-top">
                <ul class="grid_2">
                        <!-- blade function -->
                        @foreach($hot_sales_product as $product)
                            <li>
                                <a href=""><img src="{{asset('assets/frontend/images/8.jpg')}}" class="img-responsive" alt=""></a>
                                <div class="special-info grid_1 simpleCart_shelfItem">
                                    <h5>{{ $product['product_name'] }}</h5>
                                    <div class="item_add"><span class="item_price"><h6>RM {{ $product['price'] }}</h6></span></div>
                                    <div class="item_add"><span class="item_price"><a href="#">Add to Cart</a></span></div>
                                </div>
                            </li>
                        @endforeach
                        <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    </div>
    <div class="special">
        <div class="container">
            <h3>Special Offer</h3>
            <div class="specia-top">
                <ul class="grid_2">
                        <!-- blade function -->
                        @foreach($special_offer_product as $product)
                            <li>
                                <a href=""><img src="{{asset('assets/frontend/images/8.jpg')}}" class="img-responsive" alt=""></a>
                                <div class="special-info grid_1 simpleCart_shelfItem">
                                    <h5>{{ $product['product_name'] }}</h5>
                                    <div class="item_add"><span class="item_price"><h6>RM {{ $product['price'] }}</h6></span></div>
                                    <div class="item_add"><span class="item_price"><a href="#">Add to Cart</a></span></div>
                                </div>
                            </li>
                        @endforeach
                        <div class="clearfix"></div>
                    <li>
                        <a href="{{route('details')}}"><img src="{{asset('assets/frontend/images/8.jpg')}}"
                                                            class="img-responsive" alt=""></a>
                        <div class="special-info grid_1 simpleCart_shelfItem">
                            <h5>Lorem ipsum dolor</h5>
                            <div class="item_add"><span class="item_price"><h6>ONLY $40.00</h6></span></div>
                            <div class="item_add"><span class="item_price"><a href="#">add to cart</a></span></div>
                        </div>
                    </li>
                    <li>
                        <a href="{{route('details')}}"><img src="{{asset('assets/frontend/images/9.jpg')}}"
                                                            class="img-responsive" alt=""></a>
                        <div class="special-info grid_1 simpleCart_shelfItem">
                            <h5>Consectetur adipis</h5>
                            <div class="item_add"><span class="item_price"><h6>ONLY $60.00</h6></span></div>
                            <div class="item_add"><span class="item_price"><a href="#">add to cart</a></span></div>
                        </div>
                    </li>
                    <li>
                        <a href="{{route('details')}}"><img src="{{asset('assets/frontend/images/10.jpg')}}"
                                                            class="img-responsive" alt=""></a>
                        <div class="special-info grid_1 simpleCart_shelfItem">
                            <h5>Commodo consequat</h5>
                            <div class="item_add"><span class="item_price"><h6>ONLY $14.00</h6></span></div>
                            <div class="item_add"><span class="item_price"><a href="#" onclick="myFunction('02')">add to cart</a></span></div>
                        </div>
                    </li>
                    <li>
                        <a href="{{route('details')}}"><img src="{{asset('assets/frontend/images/11.jpg')}}"
                                                            class="img-responsive" alt=""></a>
                        <div class="special-info grid_1 simpleCart_shelfItem">
                            <h5>Voluptate velit</h5>
                            <div class="item_add"><span class="item_price"><h6>ONLY $37.00</h6></span></div>
                            <div class="item_add"><span class="item_price"><a href="#" onclick="myFunction('01')">add to cart</a></span></div>
                        </div>
                    </li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    </div>
    <script type="text/javascript">

            function myFunction($event) {
                $.ajax({
                    type:'GET',
                    url:'/add_to_cart/'+$event,
                    data:'',
                    success: function(){
                        console.log($event);
                        // $('#form').find('#add_btn').attr('disabled', true);
                    }
                });

            }
    </script>

@endsection

@push('js')

@endpush
