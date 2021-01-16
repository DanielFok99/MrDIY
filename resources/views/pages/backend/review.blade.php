@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Review List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Review</span></li>
        </ul>
    </div>
@endsection

@section('content')

    <!-- page title area end -->
    <div class="main-content-inner">
        <div class="row">
            <!-- Dark table start -->
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">
                            Review List
                        </h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    <th>No.</th>
                                    <th>Product Name</th>
                                    <th>Customer First Name</th>
                                    <th>Last Name</th>
                                    <th>Rate</th>
                                    <th>Title</th>
                                    <th>Comment</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Dark table end -->
        </div>
    </div>
@endsection

@push('js')
    <script type="text/javascript">
        $(document).ready(function () {
            baseTable = $('#baseTable').DataTable({
                stateSave: true,
                destroy: true,
                "ajax": {
                    "url": "{{route('review.data')}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                    "orderable": "true",
                    "searchable": "true"
                },
                "columns": [{
                    "data": "id"
                },
                    {
                        "data": "product_name"
                    },
                    {
                        "data": "customer_firstname"
                    },
                    {
                        "data": "customer_lastname"
                    },
                    {
                        "data": "rate"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "data": "comment"
                    },
                    {
                        "data": "status"
                    },
                    {
                        "data": "created_at"
                    },
                    {
                        data: 'id',
                        "class": "cbcell",

                        "render": function (id) {
                            return '<a type="button" href="{{url('/review/active_inactive').'/'}}' + id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
                        }
                    },
                ],
            });

        });

    </script>
@endpush
