@extends('layouts.app')


@push('css')

@endpush


@section('breadcrumbs-area')
    <div class="breadcrumbs-area clearfix">
        <h4 class="page-title pull-left">Product List</h4>
        <ul class="breadcrumbs pull-left">
            <li><a>Maintenance</a></li>
            <li><span>Porduct</span></li>
        </ul>
    </div>
@endsection

@section('content')

    {{--    create product--}}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('product.store')}}" method="post" id="product_create" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="product_id">Product ID</label>
                            <input type="text" class="form-control" id="product_id" name="product_id" required>
                        </div>
                        <div class="form-group">
                            <label for="product_name">Product Name</label>
                            <input type="text" class="form-control" id="product_name" name="product_name" required>
                        </div>
                        <div class="form-group">
                            <label for="product_description">Description</label>
                            <textarea class="form-control" rows="4" id="product_description" name="product_description"
                                     style="resize:none;"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" name="price" step=".01" required>
                        </div>
                        <div class="form-group">
                            <label for="category_dtl_id" class="col-form-label">Category</label>
                            <select class="form-control" name="category_dtl_id" id="category_dtl_id" required>
                                <option>Select a category</option>
                                @foreach($categories as $category)
                                    <option
                                        value="{{ $category->category_dtl_id }}">{{ $category->category_dtl_description }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="quantity" class="col-form-label">Quantity</label>
                            <input type="number" class="form-control" id="quantity"
                                   name="quantity" min="0" required>
                        </div>
                        <div class="form-group">
                            <label for="product_status" class="col-form-label">Status</label>
                            <select class="form-control" name="product_status" id="product_status" required>
                                <option value="new">New</option>
                                <option value="hot sales">Hot Sales</option>
                                <option value="special offer">Special Offer</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>

                        <!-- Image -->
                        <!-- <div class="form-group">
                            <label for="product_image" class="col-form-label">Image</label>
                            <input type="file" id="file" name="image_file" accept="image/*">
                        </div> -->

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

    {{--    edit product    --}}
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit">Edit Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form action="{{route('product.update')}}" method="post" id="branch_edit">
                    @csrf
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="edit_product_id">Product ID</label>
                            <input type="text" class="form-control" id="edit_product_id" name="edit_product_id"
                                   required="required" readonly>
                            <!-- <input type="hidden" class="form-control" id="edit_product_id1" name="edit_product_id1"
                                   required="required"> -->
                        </div>

                        <div class="form-group">
                            <label for="edit_product_name">Product Name</label>
                            <input type="text" class="form-control" id="edit_product_name" name="edit_product_name"
                                   required="required">
                        </div>

                        <div class="form-group">
                            <label for="edit_product_description">Product Description</label>
                            <textarea class="form-control" rows="4" id="edit_product_description"
                                      name="edit_product_description"
                                      required="required" style="resize:none;"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="edit_price">Price</label>
                            <input type="text" class="form-control" id="edit_price" name="edit_price"
                                   required="required">
                        </div>

                        <div class="form-group">
                            <label for="edit_category">Category</label>
                            <input type="text" class="form-control" id="edit_category" name="edit_category"
                                   required="required">
                        </div>

                        <div class="form-group">
                            <label for="edit_quantity">Quantity</label>
                            <input type="text" class="form-control" id="edit_quantity" name="edit_quantity"
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
                            Products List
                            <button style="float: right; padding-bottom: 1%" type="button" class="btn btn-primary"
                                    id="create_btn" data-toggle="modal"
                                    data-target="#exampleModal">Create Product
                            </button>
                        </h4>
                        <div class="data-tables datatable-dark">
                            <table id="baseTable" class="text-center" style="width: 100%">
                                <thead class="text-capitalize">
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <!-- <th>Description</th> -->
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th>Active</th>
                                    <!-- <th>Create At</th> -->
                                    <th>Update At</th>
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
                    "url": "{{route('product.data')}}",
                    "type": "GET",
                    'data': "",
                    "dataSrc": "",
                    "orderable": "true",
                    "searchable": "true"
                },
                "columns": [{
                    "data": "product_id"
                },
                    {
                        "data": "product_name"
                    },
                    // {
                    //     "data": "product_description"
                    // },
                    {
                        "data": "price"
                    },
                    {
                        "data": "category_dtl_description"
                    },
                    {
                        "data": "quantity"
                    },
                    {
                        "data": "product_status"
                    },
                    {
                        "data": "product_active"
                    },
                    // {
                    //     "data": "created_at"
                    // },
                    {
                        "data": "updated_at"
                    },
                    {
                        data: 'product_id',
                        "class": "cbcell",

                        "render": function (product_id) {
                            return '<button type="button" class="btn btn-info" id="edit_btn" data-toggle="modal" data-target="#edit">Edit</button>\n' +
                                '  <a type="button" href="{{url('/product/active_inactive').'/'}}' + product_id + '" id="active" class="btn btn-danger">Active/In-Active</a>';
                        }
                    },
                ],
            });
            baseTable.on("click", "td button[id=edit_btn]", function () {
                var data = baseTable.row($(this).closest("tr")).data();
                document.getElementById('edit_product_id').value = data['product_id'];
                document.getElementById('edit_product_name').value = data['product_name'];
                document.getElementById('edit_product_description').value = data['product_description'];
                document.getElementById('edit_price').value = data['price'];
                document.getElementById('edit_category').value = data['category_dtl_id'];
                document.getElementById('edit_quantity').value = data['quantity'];
            });

        });

    </script>

@endpush
