@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Promo Code Record List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Promo Code Record</span></li>
        </ul>
    </div>
@endsection

@section('content')

    {{--    create staff--}}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Promo Code</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('promo_code.store')}}" method="post" id="user_create">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="promo_code">Promo Code</label>
                            <input type="text" class="form-control" id="promo_code" name="promo_code"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="rate">Rate</label>
                            <input type="text" class="form-control" id="rate" name="rate"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="type">Type</label>
                            <select class="form-control" name="type">
                                <option value="%">%</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="expired_date">Expired Date</label>
                            <input type="datetime-local" class="form-control" id="expired_date" name="expired_date"
                                   required="required">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                        </button>
                        <button type="submit" name="submit" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{--   end create--}}

    {{--    edit staff    --}}
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit">Edit Promo Code</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('promo_code.update')}}" method="post" id="branch_edit">
                    @csrf
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="edit_promo_code">Promo Code</label>
                            <input type="text" disabled class="form-control" id="edit_promo_code" name="edit_promo_code"
                                   required="required">
                            <input type="hidden" class="form-control" id="edit_promo_code1" name="edit_promo_code1"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="edit_rate">Rate</label>
                            <input type="text" class="form-control" id="edit_rate" name="edit_rate"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="edit_type">Type</label>
                            <select required class="form-control" name="edit_type">
                                <option value="%">%</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="edit_expired_date">Expired Date</label>
                            <input type="datetime-local" class="form-control" id="edit_expired_date"
                                   name="edit_expired_date"
                                   required="required">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                        </button>
                        <button type="submit" name="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{--    end edit--}}



    <!-- page title area end -->
    <div class="main-content-inner">
        <div class="row">
            <!-- Dark table start -->
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">
                            Promo Code Record
                        </h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    {{--                                    <th>ID</th>--}}
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Promo Code</th>
                                    <th>Sales ID</th>
                                    <th>Create At</th>
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
                    "url": "{{route('promo_code_record.data')}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                },
                "columns": [{
                    "data": "id"
                },
                    {
                        "data": "name"
                    },
                    {
                        "data": "promo_code"
                    },
                    {
                        "data": "sales_hdr_id"
                    },
                    {
                        "data": "created_at"
                    },
                ],
            });
            // baseTable.on("click", "td button[id=edit_btn]", function() {
            //     var data = baseTable.row($(this).closest("tr")).data();
            //     document.getElementById('edit_promo_code').value = data['promo_code'];
            //     document.getElementById('edit_promo_code1').value = data['promo_code'];
            //     document.getElementById('edit_rate').value = data['rate'];
            //     document.getElementById('edit_type').value = data['type'];
            //     document.getElementById('edit_expired_date').value = data['expired_date'];
            // });
            // baseTable.on("click", "td button[id=chg_pass]", function() {
            //     var data = baseTable.row($(this).closest("tr")).data();
            //     document.getElementById('id').value = data['staff_id'];
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
