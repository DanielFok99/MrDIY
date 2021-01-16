@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    <div class="container">
        <div class="check">
            <div class="col-md-3 cart-total">
                <a class="continue" href="#">Continue to basket</a>
                <div class="price-details">
                    <h3>Price Details</h3>
                    <span>Total</span>
                    <span class="total1">{{$total}}</span>
                    <span>Discount</span>
                    <span class="total1">{{$promo}}</span>
                    <div class="clearfix"></div>
                </div>
                <ul class="total_price">
                    <li class="last_price"><h4>TOTAL</h4></li>
                    <li class="last_price"><span>{{$last_total}}</span></li>
                    <div class="clearfix"></div>
                </ul>


                <div class="clearfix"></div>
                <a class="order" href="#">Place Order</a>
                <div class="total-item">
                    <h3>OPTIONS</h3>
                    @csrf
                    <form action="{{route('shopping_cart.add_promo')}}" method="post">
                    <h4><input type="text" class="form-control" name="promo"></h4>
                    <button class="cpns" type="submit" href="#">Apply Promo Code</button>
                    </form>
                    <p><a href="#">Log In</a> to use accounts - linked coupons</p>
                </div>
            </div>
            <div class="col-md-9 cart-items">
                <h1>My Shopping Cart</h1>

                @foreach($products as $product)
                <div class="cart-header{{$product->id}}">
                    <button class="btn-primary" onclick="remove({{$product->id}})" style="float: right">X</button>
                    <div class="cart-sec simpleCart_shelfItem">
                        <div class="cart-item cyc">
                            <img src="{{asset('assets/frontend/images/8.jpg')}}" class="img-responsive" alt=""/>
                        </div>
                        <div class="cart-item-info">
                            <h3><a href="#"> {{ $product->product_name }}</a></h3>
                            <ul class="qty">
                                <li><p>Price : {{$product->price}}</p></li>
                                <li><p>Qty : {{$product->quantity}}</p></li>
                            </ul>

                            <div class="delivery">
                                <p>Total: {{$product->total}}</p>
                                <span>Delivered in 2-3 bussiness days</span>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                @endforeach
{{--                <script>$(document).ready(function (c) {--}}
{{--                        $('.close2').on('click', function (c) {--}}
{{--                            $('.cart-header2').fadeOut('slow', function (c) {--}}
{{--                                $('.cart-header2').remove();--}}
{{--                            });--}}
{{--                        });--}}
{{--                    });--}}
{{--                </script>--}}
{{--                <div class="cart-header2">--}}
{{--                    <div class="close2"></div>--}}
{{--                    <div class="cart-sec simpleCart_shelfItem">--}}
{{--                        <div class="cart-item cyc">--}}
{{--                            <img src="{{asset('assets/frontend/images/11.jpg')}}" class="img-responsive" alt=""/>--}}
{{--                        </div>--}}
{{--                        <div class="cart-item-info">--}}
{{--                            <h3><a href="#">Mountain Hopper(XS R034)</a><span>Model No: 3578</span></h3>--}}
{{--                            <ul class="qty">--}}
{{--                                <li><p>Size : 5</p></li>--}}
{{--                                <li><p>Qty : 1</p></li>--}}
{{--                            </ul>--}}
{{--                            <div class="delivery">--}}
{{--                                <p>Service Charges : Rs.100.00</p>--}}
{{--                                <span>Delivered in 2-3 bussiness days</span>--}}
{{--                                <div class="clearfix"></div>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="clearfix"></div>--}}

{{--                    </div>--}}
{{--                </div>--}}
            </div>


            <div class="clearfix"></div>
        </div>
    </div>
    <script>
        $(document).ready(function (c) {
            $('.close1').on('click', function (c) {

            });
        });
        function remove($event) {
            $.ajax({
                type:'GET',
                url:'/shopping_cart/destroy/'+$event,
                data:'',
                success: function(){
                    console.log($event);
                    // $('#form').find('#add_btn').attr('disabled', true);
                }
            });
            $hdr = '.cart-header'+$event;
            console.log($hdr);
            $($hdr).fadeOut('slow', function (c) {
                $($hdr).remove();
            });
        }
    </script>
@endsection

@push('js')

@endpush




