@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')

    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Sales List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Sales</span></li>
        </ul>
    </div>
@endsection
@section('content')
    <div class="main-content-inner">
        <div class="row">
            <!-- Dark table start -->
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Sales List</h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    {{--                                    <th>ID</th>--}}
                                    <th>Sales ID</th>
                                    <th>Name</th>
                                    <th>Contact No.</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Payment Method</th>
                                    <th>Total</th>
                                    <th>Create At</th>
                                    <th>Active</th>
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
                    "url": "{{route('sales.list_data')}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                },
                "columns": [{
                    "data": "sales_hdr_id"
                },
                    {
                        "data": "name"
                    },
                    {
                        "data": "contact_num"
                    },
                    {
                        "data": "email"
                    },
                    {
                        "data": "address"
                    },
                    {
                        "data": "payment_method"
                    },
                    {
                        "data": "total"
                    },
                    {
                        "data": "created_at"
                    },
                    {
                        "data": "active"
                    },
                    {
                        data: 'sales_hdr_id',
                        "class": "cbcell",
                        "render": function (sales_hdr_id) {
                            return '  <a type="button" href="{{url('/sales/detail').'/'}}' + sales_hdr_id + '" class="btn btn-info">View</a>\n' +
                                '  <a type="button" href="{{url('/sales/list/active_inactive').'/'}}' + sales_hdr_id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
                        }
                    },
                ],
            });
            // baseTable.on("click", "td button[id=edititembutton]", function() {
            //     var data = baseTable.row($(this).closest("tr")).data();
            //     document.getElementById('member_id').value = data['member_id'];
            //     document.getElementById('member_id1').value = data['member_id'];
            //     document.getElementById('member_name').value = data['name'];
            //     document.getElementById('point').value = data['point'];
            //
            // });
            // baseTable.on("click", "td button[id=modify_expired]", function() {
            //     var data = baseTable.row($(this).closest("tr")).data();
            //     document.getElementById('card_id').value = data['card_id'];
            // });
            //
            // baseTable.on("click", "td button[id=active]", function() {
            //     baseTable.ajax.reload();
            // });

        });
    </script>
@endpush
