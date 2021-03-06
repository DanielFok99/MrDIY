@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Customer Maintenance </h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Customer</span></li>
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
                        <h4 class="header-title">Customer List</h4>
                        <div class="data-tables datatable-dark">
                            <table id="yajra-datatable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
{{--                                    <th>ID</th>--}}
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Status</th>
                                    <th>Create Date</th>
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
        $(function () {

            let table = $('#yajra-datatable').DataTable({
                processing: true,
                serverSide: true,
                ajax: "{{ route('customer.index') }}",
                columns: [
                    // {data: 'customer_id', name: 'id',},
                    {data: 'email', name: 'Email'},
                    {data: 'contact', name: 'Contact Number'},
                    {data: 'customer_firstname', name: 'First Name'},
                    {data: 'customer_lastname', name: 'Last Name'},
                    {data: 'status', name: 'Status'},
                    {data: 'created_at', name: 'Create Date'},
                    {data: 'action', name: 'action',},
                ]
            });

        });
    </script>
@endpush
