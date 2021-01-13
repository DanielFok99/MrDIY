@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    <div class="container">
        <div class="women_main">
            <!-- start content -->
            <div class="row single">
                <div class="col-md-9 det">
                    <div class="single_left">
                        <div class="grid images_3_of_2">
                            <ul id="etalage">
                                <li>
                                    <a href="optionallink.html">
                                        <img class="etalage_thumb_image"
                                             src="{{asset('assets/frontend/images/9070773/1.jpg')}}" class="img-responsive"/>
                                        <img class="etalage_source_image"
                                             src="{{asset('assets/frontend/images/9070773/1.jpg')}}" class="img-responsive"
                                             title=""/>
                                    </a>
                                </li>
                                <li>
                                    <img class="etalage_thumb_image" src="{{asset('assets/frontend/images/d2.jpg')}}"
                                         class="img-responsive"/>
                                    <img class="etalage_source_image" src="{{asset('assets/frontend/images/d2.jpg')}}"
                                         class="img-responsive" title=""/>
                                </li>
                                <li>
                                    <img class="etalage_thumb_image" src="{{asset('assets/frontend/images/d3.jpg')}}"
                                         class="img-responsive"/>
                                    <img class="etalage_source_image" src="{{asset('assets/frontend/images/d3.jpg')}}"
                                         class="img-responsive"/>
                                </li>
                                <li>
                                    <img class="etalage_thumb_image" src="{{asset('assets/frontend/images/d4.jpg')}}"
                                         class="img-responsive"/>
                                    <img class="etalage_source_image" src="{{asset('assets/frontend/images/d4.jpg')}}"
                                         class="img-responsive"/>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        
                        <div class="desc1 span_3_of_2">
                            @foreach($this_product as $product)
                            <h3>{{ $product->product_name }}</h3>
                            <span class="brand">Category: <a href="#">{{ $product->category_dtl_description }} </a></span>
                            <br>
                            <span class="code">Product Code: {{ $product->product_id }}</span>
                            <!-- <p>when an unknown printer took a galley of type and scrambled it to make</p> -->
                            <div class="price">
                                <span class="text">Price:</span>
                                <span class="price-new">RM {{ $product->price }}</span>
                                <!-- <span class="price-old">$100.00</span> -->
                                <!-- <span class="price-tax">Ex Tax: $90.00</span><br> -->
                                <!-- <span class="points"><small>Price in reward points: 400</small></span><br> -->
                            </div>
                            
                            
                            <div class="btn_form">
                                <a href="checkout.html">Add to Cart</a>
                            </div>
                            <!-- <a href="#"><span>login to save in wishlist </span></a> -->

                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="single-bottom1">
                        <h6>Details</h6>
                        <p class="prod-desc">{{ $product->product_description }}</p>
                    </div>
                        @endforeach
                    <div class="single-bottom2">
                        <h6>Review & Comment</h6>
                        @foreach($this_review as $review)
                            <div class="alert alert-secondary">
                                {{ $review->customer_firstname }} {{$review->customer_lastname}} {{ $review->created_at }}<br/>
                                Rate: {{ $review->rate }} <br/>
                                <h5>{{ $review->title }}</h5>
                                {{ $review->comment }}
                            </div>
                            <br/>
                        @endforeach
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="w_sidebar">
                        <div class="w_nav1">
                        <h3>Category</h3>
                        <ul>
                            <li><a href="{{route('front_product.category', '0')}}">All</a></li>
                            <li><a href="{{route('front_product.category', '02')}}">Hoses</a></li>
                            <li><a href="{{route('front_product.category', '03')}}">Water Taps</a></li>
                            <li><a href="{{route('front_product.category', '04')}}">Shower Heads</a></li>
                            <li><a href="{{route('front_product.category', '05')}}">Drain Cleaners</a></li>
                            <li><a href="{{route('front_product.category', '06')}}">Accessories</a></li>
                            <li><a href="{{route('front_product.category', '1')}}">Pipes</a></li>
                            <li><a href="{{route('front_product.category', 'b01')}}">Drills</a></li>
                            <li><a href="{{route('front_product.category', 'b02')}}">Measuring Tape</a></li>
                            <li><a href="{{route('front_product.category', 'b03')}}">Screwdrivers</a></li>
                            <li><a href="{{route('front_product.category', 'b04')}}">Hammers</a></li>
                            <li><a href="{{route('front_product.category', 'b05')}}">Spanners</a></li>
                            <li><a href="{{route('front_product.category', 'b06')}}">Ladders</a></li>
                            <li><a href="{{route('front_product.category', 'b07')}}">Trolleys</a></li>
                            <li><a href="{{route('front_product.category', 'b08')}}">Tools</a></li>
                            <li><a href="{{route('front_product.category', 'b09')}}">Saws</a></li>
                            <li><a href="{{route('front_product.category', 'b10')}}">Cutters</a></li>
                            <li><a href="{{route('front_product.category', 'b11')}}">Tool Boxes</a></li>
                            <li><a href="{{route('front_product.category', 'b12')}}">Tape</a></li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- end content -->
        </div>
    </div>
@endsection

@push('js')

@endpush
