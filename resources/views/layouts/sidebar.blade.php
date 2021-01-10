<div class="sidebar-menu">
    <div class="sidebar-header">
        <div class="logo">
            <a href="{{route('home')}}"><img src="{{asset('assets/images/icon/logo.png')}}" alt="logo"></a>
        </div>
    </div>
    <div class="main-menu">
        <div class="menu-inner">
            <nav>
                <ul class="metismenu" id="menu">
                    <li><a href="{{route('home')}}"><i class="ti-dashboard"></i><span>dashboard</span></a></li>
                    <li><a href="javascript:void(0)" aria-expanded="true"><i class="ti-money"></i><span>Sales</span></a>
                        <ul class="collapse">
                            <li><a href="{{route('sales.list')}}">Sales List</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)" aria-expanded="true"><i class="ti-user"></i><span>Staff</span></a>
                        <ul class="collapse">
                            <li><a href="{{route('staff.view')}}">Staff List</a></li>
                        </ul>
                    </li>
                    <li><a href="{{route('category.view')}}"><i class="ti-layout"></i><span>Category</span></a></li>
                    <li><a href="{{route('product.view')}}"><i class="ti-package"></i><span>Product</span></a></li>
                    <li><a href="{{route('promo_code.view')}}"><i class="ti-layout-cta-btn-right"></i>
                            <span>Promo Code</span></a></li>
                    <li><a href="{{route('customer.index')}}"><i class="ti-map-alt"></i> <span>customer</span></a></li>
                    <li><a href="{{route('chatroom.index')}}"><i class="ti-dashboard"></i><span>Chatroom</span></a></li>

                </ul>
            </nav>
        </div>
    </div>
</div>
