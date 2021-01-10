@extends('layouts.app')
<style>
    .no-padding {
        padding: 0 !important;
    }
</style>
@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Chat Room</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Service</a></li>
            <li><span>Chat Room</span></li>
        </ul>
    </div>
@endsection

@section('content')

    <div class="main-content-inner" id="app2">
        <div class="row">

            {{--            Customer Chatroom--}}
            <div class="col-8 mt-3">
                <div class="card">
                    <div class="card-body no-padding">
                        <chat-container :base-url="baseUrl" :staff-id="staffId" :current-user-id="currentUserId"
                                        :theme="theme" v-if="showChat"/>
                        {{--                        <chat-room v-bind:current-user-id="currentUserId" v-bind:rooms="rooms"--}}
                        {{--                                   v-bind:messages="messages"></chat-room>--}}
                    </div>
                </div>
            </div>
            {{--            Customer Item Detail--}}
            <div class="col-4 mt-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Item Detail</h4>

                    </div>
                </div>
            </div>
            <!-- Dark table end -->
        </div>
    </div>
@endsection

@push('js')
    <script type="module">
        Vue.use(ChatContainer);
        const app = new Vue({
            el: '#app2',
            components: {
                ChatContainer,
            },
            data: {
                baseUrl: '{{url('/')}}',
                theme: 'light',
                showChat: true,
                currentUserId: 0,
                staffId:{{Auth::id()}},
            },
            mounted() {

            },
            methods: {},

        });
    </script>
@endpush
