<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{asset('css/app2.css')}}" rel="stylesheet">

    @stack('css')

</head>
<body>
<div id="app">

    <div id="preloader">
        <div class="loader"></div>
    </div>
    <!-- preloader area end -->
    <!-- page container area start -->
    @guest()
        @yield('content')
    @else

        @if(Route::current()->getName() == 'chatroom.index')
            <div class="page-container sbar_collapsed">

                @else
                    <div class="page-container">

                    @endif
                    <!-- sidebar menu area start -->
                    @include('layouts.sidebar')
                    <!-- sidebar menu area end -->
                        <!-- main content area start -->

                        <main class="main-content">
                            <!-- header area start -->
                            <div class="header-area">
                                <div class="row align-items-center">
                                    <!-- nav and search button -->
                                    <div class="col-md-6 col-sm-8 clearfix">
                                        <div class="nav-btn pull-left">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div class="search-box pull-left">
                                            <form action="#">
                                                <input type="text" name="search" placeholder="Search..." required>
                                                <i class="ti-search"></i>
                                            </form>
                                        </div>
                                    </div>
                                    <!-- profile info & task notification -->
                                    <div class="col-md-6 col-sm-4 clearfix">
                                        <ul class="notification-area pull-right">
                                            <li id="full-view"><i class="ti-fullscreen"></i></li>
                                            <li id="full-view-exit"><i class="ti-zoom-out"></i></li>
                                            <li class="dropdown">
                                                <i class="ti-bell dropdown-toggle" data-toggle="dropdown">
                                                    <span>2</span>
                                                </i>
                                                <div class="dropdown-menu bell-notify-box notify-box">
                                                    <span class="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                                    <div class="nofity-list">
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>You have Changed Your Password</p>
                                                                <span>Just Now</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i
                                                                    class="ti-comments-smiley btn-info"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>New Commetns On Post</p>
                                                                <span>30 Seconds ago</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i class="ti-key btn-primary"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Some special like you</p>
                                                                <span>Just Now</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i
                                                                    class="ti-comments-smiley btn-info"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>New Commetns On Post</p>
                                                                <span>30 Seconds ago</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i class="ti-key btn-primary"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Some special like you</p>
                                                                <span>Just Now</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>You have Changed Your Password</p>
                                                                <span>Just Now</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i>
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>You have Changed Your Password</p>
                                                                <span>Just Now</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <i class="fa fa-envelope-o dropdown-toggle"
                                                   data-toggle="dropdown"><span>3</span></i>
                                                <div class="dropdown-menu notify-box nt-enveloper-box">
                                                    <span class="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                                    <div class="nofity-list">
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img1.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">Hey I am waiting for you...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img2.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">When you can connect with me...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img3.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">I missed you so much...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img4.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span
                                                                    class="msg">Your product is completely Ready...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img2.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">Hey I am waiting for you...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img1.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">Hey I am waiting for you...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="notify-item">
                                                            <div class="notify-thumb">
                                                                <img
                                                                    src="{{asset('assets/images/author/author-img3.jpg')}}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="notify-text">
                                                                <p>Aglae Mayer</p>
                                                                <span class="msg">Hey I am waiting for you...</span>
                                                                <span>3:15 PM</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="settings-btn">
                                                <i class="ti-settings"></i>
                                            </li>
                                            <li class="">
                                                <i class="mdi mdi-logout-variant" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"></i>
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                                      class="d-none">
                                                    @csrf
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- header area end -->
                            <!-- page title area start -->
                            <div class="page-title-area">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        @yield('breadcrumbs-area')
                                    </div>
                                    <div class="col-sm-6 clearfix">
                                        <div class="user-profile pull-right">
                                            <img class="avatar user-thumb"
                                                 src="{{asset('assets/images/author/avatar.png')}}" alt="avatar">
                                            <h4 class="user-name dropdown-toggle"
                                                data-toggle="dropdown">{{Auth::user()->username}}<i
                                                    class="fa fa-angle-down"></i></h4>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Message</a>
                                                <a class="dropdown-item" href="#">Settings</a>
                                                <a class="dropdown-item" href="#">Log Out</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- page title area end -->

                            @yield('content')
                        </main>

                        <!-- main content area end -->
                        <!-- footer area start-->
                        <footer>
                            <div class="footer-area">
                                <p>© Copyright {{date('Y')}}. All right reserved.
                                </p>
                            </div>
                        </footer>
                        <!-- footer area end-->
                    </div>
                    <!-- page container area end -->
            @endguest
            <!-- offset area start -->
                <div class="offset-area">
                    <div class="offset-close"><i class="ti-close"></i></div>
                    <ul class="nav offset-menu-tab">
                        <li><a class="active" data-toggle="tab" href="#activity">Activity</a></li>
                        <li><a data-toggle="tab" href="#settings">Settings</a></li>
                    </ul>
                    <div class="offset-content tab-content">
                        <div id="activity" class="tab-pane fade in show active">
                            <div class="recent-activity">
                                <div class="timeline-task">
                                    <div class="icon bg1">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Rashed sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg2">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Added</h4>
                                        <span class="time"><i class="ti-time"></i>7 Minutes Ago</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg2">
                                        <i class="fa fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>You missed you Password!</h4>
                                        <span class="time"><i class="ti-time"></i>09:20 Am</span>
                                    </div>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg3">
                                        <i class="fa fa-bomb"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Member waiting for you Attention</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg3">
                                        <i class="ti-signal"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>You Added Kaji Patha few minutes ago</h4>
                                        <span class="time"><i class="ti-time"></i>01 minutes ago</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg1">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Ratul Hamba sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Hello sir , where are you, i am egerly waiting for you.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg2">
                                        <i class="fa fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Rashed sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg2">
                                        <i class="fa fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Rashed sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg3">
                                        <i class="fa fa-bomb"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Rashed sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                                <div class="timeline-task">
                                    <div class="icon bg3">
                                        <i class="ti-signal"></i>
                                    </div>
                                    <div class="tm-title">
                                        <h4>Rashed sent you an email</h4>
                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque
                                        at.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="settings" class="tab-pane fade">
                            <div class="offset-settings">
                                <h4>General Settings</h4>
                                <div class="settings-list">
                                    <div class="s-settings">
                                        <div class="s-sw-title">
                                            <h5>Notifications</h5>
                                            <div class="s-swtich">
                                                <input type="checkbox" id="switch1"/>
                                                <label for="switch1">Toggle</label>
                                            </div>
                                        </div>
                                        <p>Keep it 'On' When you want to get all the notification.</p>
                                    </div>
                                    <div class="s-settings">
                                        <div class="s-sw-title">
                                            <h5>Show recent activity</h5>
                                            <div class="s-swtich">
                                                <input type="checkbox" id="switch2"/>
                                                <label for="switch2">Toggle</label>
                                            </div>
                                        </div>
                                        <p>The for attribute is necessary to bind our custom checkbox with the
                                            input.</p>
                                    </div>
                                    <div class="s-settings">
                                        <div class="s-sw-title">
                                            <h5>Show your emails</h5>
                                            <div class="s-swtich">
                                                <input type="checkbox" id="switch3"/>
                                                <label for="switch3">Toggle</label>
                                            </div>
                                        </div>
                                        <p>Show email so that easily find you.</p>
                                    </div>
                                    <div class="s-settings">
                                        <div class="s-sw-title">
                                            <h5>Show Task statistics</h5>
                                            <div class="s-swtich">
                                                <input type="checkbox" id="switch4"/>
                                                <label for="switch4">Toggle</label>
                                            </div>
                                        </div>
                                        <p>The for attribute is necessary to bind our custom checkbox with the
                                            input.</p>
                                    </div>
                                    <div class="s-settings">
                                        <div class="s-sw-title">
                                            <h5>Notifications</h5>
                                            <div class="s-swtich">
                                                <input type="checkbox" id="switch5"/>
                                                <label for="switch5">Toggle</label>
                                            </div>
                                        </div>
                                        <p>Use checkboxes when looking for yes or no answers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <!-- Scripts -->
            <script src="{{ asset('js/app.js') }}"></script>
            <!-- start chart js -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
            <!-- start highcharts js -->
            <script src="https://code.highcharts.com/highcharts.js"></script>
            <!-- start zingchart js -->
            <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
            <script>
                zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
                ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];
            </script>
            <script src="{{ asset('js/app2.js') }}"></script>
            <!-- jquery latest version -->
{{--<script src="{{asset('assets/js/vendor/jquery-2.2.4.min.js')}}"></script>--}}
@stack('js')
</body>
</html>
