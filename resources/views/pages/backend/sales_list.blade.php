@extends('layouts.app')

@push('css')
    <style>
        .buttons-print{
            box-shadow:inset 0px 1px 0px 0px #ffffff;
            background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
            background-color:#ffffff;
            border-radius:6px;
            border:1px solid #dcdcdc;
            display:inline-block;
            cursor:pointer;
            color:#666666;
            font-family:Arial;
            font-size:10px;
            font-weight:bold;
            padding:8px 18px;
            text-decoration:none;
            text-shadow:0px 1px 0px #ffffff;
        }
        .buttons-excel{
            box-shadow:inset 0px 1px 0px 0px #ffffff;
            background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
            background-color:#ffffff;
            border-radius:6px;
            border:1px solid #dcdcdc;
            display:inline-block;
            cursor:pointer;
            color:#666666;
            font-family:Arial;
            font-size:10px;
            font-weight:bold;
            padding:8px 18px;
            text-decoration:none;
            text-shadow:0px 1px 0px #ffffff;
        }.buttons-pdf{
             box-shadow:inset 0px 1px 0px 0px #ffffff;
             background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
             background-color:#ffffff;
             border-radius:6px;
             border:1px solid #dcdcdc;
             display:inline-block;
             cursor:pointer;
             color:#666666;
             font-family:Arial;
             font-size:10px;
             font-weight:bold;
             padding:8px 18px;
             text-decoration:none;
             text-shadow:0px 1px 0px #ffffff;
         }.buttons-copy{
              box-shadow:inset 0px 1px 0px 0px #ffffff;
              background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
              background-color:#ffffff;
              border-radius:6px;
              border:1px solid #dcdcdc;
              display:inline-block;
              cursor:pointer;
              color:#666666;
              font-family:Arial;
              font-size:10px;
              font-weight:bold;
              padding:8px 18px;
              text-decoration:none;
              text-shadow:0px 1px 0px #ffffff;
          }.buttons-csv{
               box-shadow:inset 0px 1px 0px 0px #ffffff;
               background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
               background-color:#ffffff;
               border-radius:6px;
               border:1px solid #dcdcdc;
               display:inline-block;
               cursor:pointer;
               color:#666666;
               font-family:Arial;
               font-size:10px;
               font-weight:bold;
               padding:8px 18px;
               text-decoration:none;
               text-shadow:0px 1px 0px #ffffff;
           }
    </style>
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
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/b-1.6.5/b-html5-1.6.5/b-print-1.6.5/datatables.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            baseTable = $('#baseTable').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
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
