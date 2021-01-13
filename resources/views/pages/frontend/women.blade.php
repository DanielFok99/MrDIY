@extends('layouts.frondend.app')
@push('css')

@endpush
@section('content')
    <div class="container">
        <div class="women_main">
            <!-- start sidebar -->
            <div class="col-md-3 s-d">
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
            <!-- start content -->
            <div class="col-md-9 w_content">
                <div class="women">
                    <div class="clearfix"></div>
                </div>
                @php $i = 1; @endphp
                @foreach($category_product as $product)
                    @if($i == 1)
                        <div class="grids_of_4">
                    @endif
                            <div class="grid1_of_4">
                                <div class="content_box"><a href="{{route('front_product.detail', $product->product_id)}}">
                                        <img src="{{asset('assets/frontend/images/w1.jpg')}}" class="img-responsive" alt=""/>
                                    </a>
                                    <h4><a href="{{route('details')}}"> {{ $product->product_name }}</a></h4>
                                    <div class="grid_1 simpleCart_shelfItem">

                                        <div class="item_add"><span class="item_price"><h6>RM {{ $product->price }}</h6></span></div>
                                        <div class="item_add"><span class="item_price"><a href="#">Add to Cart</a></span></div>
                                    </div>
                                </div>
                            </div>
                    @if($i == 4)
                            <div class="clearfix"></div>
                        </div>
                        @php $i = 1; @endphp
                    @endif
                    @php $i++; @endphp
                @endforeach
                            <div class="clearfix"></div>
                        </div>
            </div>
            <div class="clearfix"></div>

            <!-- end content -->
        </div>
    </div>
@endsection

@push('js')

@endpush
