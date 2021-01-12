@extends('layouts.app')

@push('css')
@endpush
@section('breadcrumbs-area')

    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Sales Detail</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Detail</a></li>
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
                                    <th>ID</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
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
                    "url": "{{url('/sales/detail/data').'/'.$id}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                },
                // <th>ID</th>
                // <th>Product</th>
                // <th>Quantity</th>
                // <th>Price</th>
                // <th>Total</th>
                // <th>Create At</th>
                // <th>Action</th>
                "columns": [{
                    "data": "sales_dtl_id"
                },
                    {
                        "data": "product_name"
                    },
                    {
                        "data": "quantity"
                    },
                    {
                        "data": "price"
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
                        data: 'sales_dtl_id',
                        "class": "cbcell",
                        "render": function (sales_dtl_id) {
                            return '  <a type="button" href="{{url('/sales/detail/active_inactive').'/'}}' + sales_dtl_id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
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
