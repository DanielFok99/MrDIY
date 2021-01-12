@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Staff List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Satff</span></li>
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
                    <h5 class="modal-title" id="exampleModalLabel">Create Staff</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('staff.store')}}" method="post" id="user_create">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="staff_id">Staff ID</label>
                            <input type="text" class="form-control" id="staff_id" name="staff_id"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="first_name">First Name</label>
                            <input type="text" class="form-control" id="first_name" name="first_name"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="contact_num">Last Name</label>
                            <input type="text" class="form-control" id="last_name" name="last_name"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <input type="password" class="form-control" id="password"
                                   name="password" required="required">
                        </div>
                        <div class="form-group">
                            <label for="confirm_password" class="col-form-label">Confirm
                                Password</label>
                            <input type="password" class="form-control" id="confirm_password"
                                   name="confirm_password" required="required">
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
                    <h5 class="modal-title" id="edit">Edit Staff</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('staff.update')}}" method="post" id="branch_edit">
                    @csrf
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="edit_staff_id">Staff ID</label>
                            <input type="text" class="form-control" id="edit_staff_id" name="edit_staff_id"
                                   required="required" disabled>
                            <input type="hidden" class="form-control" id="edit_staff_id1" name="edit_staff_id1"
                                   required="required">
                        </div>

                        <div class="form-group">
                            <label for="edit_firstname">First Name</label>
                            <input type="text" class="form-control" id="edit_firstname" name="edit_firstname"
                                   required="required">
                        </div>

                        <div class="form-group">
                            <label for="edit_lastname">Last Name</label>
                            <input type="text" class="form-control" id="edit_lastname" name="edit_lastname"
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

    {{--    chg password--}}
    <div class="modal fade" id="pass" tabindex="-1" aria-labelledby="pass"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="pass">Change Password</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('staff.chgPass')}}" method="post" id="pass">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="chg_password">Password</label>
                            <input type="password" class="form-control" id="chg_password" name="chg_password"
                                   required="required">
                            <input type="hidden" class="form-control" id="id" name="id"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="chg_confirm_password">Confirm Password</label>
                            <input type="password" class="form-control" id="chg_confirm_password"
                                   name="chg_confirm_password"
                                   required="required">
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                        </button>
                        <button type="submit" name="submit" class="btn btn-primary">Change</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{--    end chg password--}}


    <!-- page title area end -->
    <div class="main-content-inner">
        <div class="row">
            <!-- Dark table start -->
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">
                            Sales List
                            <button style="float: right; padding-bottom: 1%" type="button" class="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#exampleModal">Create Staff
                            </button>
                        </h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    {{--                                    <th>ID</th>--}}
                                    <th>Staff ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
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
                    "url": "{{route('staff.data')}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                },
                "columns": [{
                    "data": "staff_id"
                },
                    {
                        "data": "name"
                    },
                    {
                        "data": "email"
                    },
                    {
                        "data": "created_at"
                    },
                    {
                        "data": "staff_active"
                    },
                    {
                        data: 'staff_id',
                        "class": "cbcell",

                        "render": function (staff_id) {
                            return '<button type="button" class="btn btn-info" id="edit_btn" data-toggle="modal" data-target="#edit">Edit</button>\n' +
                                '<button type="button" class="btn btn-warning" id="chg_pass" data-toggle="modal" data-target="#pass">Change Password</button>\n' +
                                '  <a type="button" href="{{url('/staff/active_inactive').'/'}}' + staff_id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
                        }
                    },
                ],
            });
            baseTable.on("click", "td button[id=edit_btn]", function () {
                var data = baseTable.row($(this).closest("tr")).data();
                document.getElementById('edit_staff_id').value = data['staff_id'];
                document.getElementById('edit_staff_id1').value = data['staff_id'];
                document.getElementById('edit_firstname').value = data['staff_firstname'];
                document.getElementById('edit_lastname').value = data['staff_lastname'];
            });
            baseTable.on("click", "td button[id=chg_pass]", function () {
                var data = baseTable.row($(this).closest("tr")).data();
                document.getElementById('id').value = data['staff_id'];
            });
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
