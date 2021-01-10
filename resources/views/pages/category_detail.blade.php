@extends('layouts.app')

@push('css')
@endpush

@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Category Detail List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Category</span></li>
        </ul>
    </div>
@endsection

@section('content')

    {{--    create category--}}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Category Detail</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('category.store_detail',$category_hdr_id)}}" method="post" id="user_create">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="category_dtl_id">Category Detail ID</label>
                            <input type="text" class="form-control" id="category_dtl_id" name="category_dtl_id"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <label for="category_dtl_description">Description</label>
                            <input type="text" class="form-control" id="category_dtl_description"
                                   name="category_dtl_description"
                                   required="required">
                        </div>

                        <input type="hidden" class="form-control" name="category_hdr_id" id="category_hdr_id"
                               value="{{request()->route('category_hdr_id')}}" required readonly>

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

    {{--    edit category dtl   --}}
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit">Edit Category Detail</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('category.update_detail',$category_hdr_id)}}" method="post" id="branch_edit">
                    @csrf
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="edit_category_dtl_id">Category Detail ID</label>
                            <input type="text" class="form-control" id="edit_category_dtl_id"
                                   name="edit_category_dtl_id"
                                   required="required" readonly>
                            <input type="hidden" class="form-control" id="edit_category_hdr_id"
                                   name="edit_category_hdr_id"
                                   required readonly>
                        </div>

                        <div class="form-group">
                            <label for="edit_category_dtl_description">Description</label>
                            <input type="text" class="form-control" id="edit_category_dtl_description"
                                   name="edit_category_dtl_description"
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
                            Category Detail List
                            <button style="float: right; padding-bottom: 1%" type="button" class="btn btn-primary"
                                    id="create_btn" data-toggle="modal"
                                    data-target="#exampleModal">Create Category Detail
                            </button>
                        </h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    <th>Category Detail ID</th>
                                    <th>Description</th>
                                    <th>Active</th>
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
                    "url": "{{route('category.detail',$category_hdr_id)}}",
                    // "url": "{{url('/category/detail/data/').$category_hdr_id}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                },
                "columns": [{
                    "data": "category_dtl_id"
                },
                    {
                        "data": "category_dtl_description"
                    },
                    {
                        "data": "category_dtl_active"
                    },
                    {
                        "data": "created_at"
                    },
                    {
                        data: 'category_dtl_id',
                        "class": "cbcell",

                        "render": function (category_dtl_id) {
                            return '<button type="button" class="btn btn-info" id="edit_btn" data-toggle="modal" data-target="#edit">Edit</button>\n' +
                                '  <a type="button" href="{{url('/category/detail/active_inactive/category_hdr_id').'/'}}' + category_dtl_id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
                        }
                    },
                ],
            });

            baseTable.on("click", "td button[id=edit_btn]", function () {
                var data = baseTable.row($(this).closest("tr")).data();
                document.getElementById('edit_category_dtl_id').value = data['category_dtl_id'];
                document.getElementById('edit_category_hdr_id').value = data['category_hdr_id'];
                document.getElementById('edit_category_dtl_description').value = data['category_dtl_description'];
            });

        });
    </script>
@endpush
