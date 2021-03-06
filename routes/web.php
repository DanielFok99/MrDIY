<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatRoomController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\Frontend\HeaderController;
use App\Http\Controllers\Frontend\ShoppingCartController;
use App\Http\Controllers\Frontend\CustomerController as FrontCustomerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PromoCodeController;
use App\Http\Controllers\PromoCodeRecordController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\FrontProductController;
use Illuminate\Support\Facades\Route;


//Route::domain('admin.danielfok99.cyou')->group(function () {
Route::domain('admin.mrdiy.test')->group(function () {

    Route::get('clear-cache', function () {
        Artisan::call('cache:clear');
        Artisan::call('route:clear');
        Artisan::call('config:clear');
        return 'Cache cleared';
    });
    Route::get('/getCSRFToken', function () {
        return csrf_token();
    });

    Route::redirect('/', '/home');
    Auth::routes();
    Route::redirect('/register', '/login');

    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/sales/list', [SalesController::class, 'view'])->name('sales.list');
    Route::get('/sales/data', [SalesController::class, 'index'])->name('sales.list_data');
    Route::get('/sales/detail/{id}', [SalesController::class, 'viewDetail'])->name('sales.viewDetail');
    Route::get('/sales/detail/data/{id}', [SalesController::class, 'sales_detail'])->name('sales.detail');
    Route::get('/sales/list/active_inactive/{id}', [SalesController::class, 'activeSalesGroup'])->name('sales.active_inactive');
    Route::get('/sales/detail/active_inactive/{id}', [SalesController::class, 'activeSalesDtl'])->name('sales.dtl_active_inactive');

    Route::get('/staff', [StaffController::class, 'view'])->name('staff.view');
    Route::get('/staff/data', [StaffController::class, 'index'])->name('staff.data');
    Route::post('/staff/store', [StaffController::class, 'store'])->name('staff.store');
    Route::post('/staff/update', [StaffController::class, 'update'])->name('staff.update');
    Route::post('/staff/chgPass', [StaffController::class, 'changePass'])->name('staff.chgPass');
    Route::get('/staff/active_inactive/{id}', [StaffController::class, 'active'])->name('staff.active_inactive');

    Route::get('/customer', [CustomerController::class, 'index'])->name('customer.index.1');

    Route::get('/chatroom', [ChatRoomController::class, 'index'])->name('chatroom.index');


//Route::get('/test', [ChatController::class, 'test']);

    Route::get('/chat/complete', [ChatController::class, 'updateRoomComplete']);
    Route::get('/chat/status', [ChatController::class, 'updateMessageStatus']);
    Route::post('/chat/staff/room', [ChatController::class, 'getStaffChatRoom']);
    Route::post('/chat/staff/message', [ChatController::class, 'getStaffChatMessage']);
//Route::post('/chat/staff/history',[ChatController::class,'getStaffChatHistory']);
    Route::get('/chat/customer/history', [ChatController::class, 'getCustomerChatHistory']);
    Route::post('/chat/staff/insert', [ChatController::class, 'staffInsert']);
    Route::post('/chat/customer/insert', [ChatController::class, 'customerInsert']);

    Route::get('/promo_code', [PromoCodeController::class, 'view'])->name('promo_code.view');
    Route::get('/promo_code/data', [PromoCodeController::class, 'index'])->name('promo_code.data');
    Route::post('/promo_code/store', [PromoCodeController::class, 'store'])->name('promo_code.store');
    Route::post('/promo_code/update', [PromoCodeController::class, 'update'])->name('promo_code.update');
    Route::get('/promo_code/active_inactive/{promo_code}', [PromoCodeController::class, 'active'])->name('promo_code.active_inactive');
    Route::get('/promo_code/delete/{promo_code}', [PromoCodeController::class, 'destroy'])->name('promo_code.delete');

    Route::get('/promo_code_record', [PromoCodeRecordController::class, 'view'])->name('promo_code_record.view');
    Route::get('/promo_code_record/data', [PromoCodeRecordController::class, 'index'])->name('promo_code_record.data');

// Category Routes
    Route::get('/category', [CategoryController::class, 'view'])->name('category.view');
    Route::get('/category/data', [CategoryController::class, 'index'])->name('category.data');
    Route::post('/category', [CategoryController::class, 'store'])->name('category.store');
    Route::post('/category/update', [CategoryController::class, 'update'])->name('category.update');
    Route::get('/category/active_inactive/{category_hdr_id}', [CategoryController::class, 'active'])->name('category.active_inactive');

    Route::get('/category/detail/{category_hdr_id}', [CategoryController::class, 'view_detail'])->name('category.view_detail');
    Route::get('/category/detail/data/{category_hdr_id}', [CategoryController::class, 'detail'])->name('category.detail');
    Route::post('/category/detail/{category_hdr_id}', [CategoryController::class, 'store_detail'])->name('category.store_detail');
    Route::post('/category/detail/update/{category_hdr_id}', [CategoryController::class, 'update_detail'])->name('category.update_detail');
    Route::get('/category/detail/active_inactive/{category_hdr_id}/{category_dtl_id}', [CategoryController::class, 'active_detail'])->name('category.active_inactive_detail');

// Product Routes
    Route::get('/product', [ProductController::class, 'view'])->name('product.view');
    Route::get('/product/data', [ProductController::class, 'index'])->name('product.data');
    Route::post('/product', [ProductController::class, 'store'])->name('product.store');
    Route::post('/product/update', [ProductController::class, 'update'])->name('product.update');
    Route::get('/product/active_inactive/{product_id}', [ProductController::class, 'active'])->name('product.active_inactive');

// Review Routes
    Route::get('/review', [ReviewController::class, 'view'])->name('review.view');
    Route::get('/review/data', [ReviewController::class, 'index'])->name('review.data');
    Route::get('/review/active_inactive/{id}', [ReviewController::class, 'active'])->name('review.active_inactive');

});

//Route::domain('store.danielfok99.cyou')->group(function () {
Route::domain('store.mrdiy.test')->group(function () {
    Route::get('/home', [HeaderController::class, 'test'])->name('store.home');
    Route::get('/add_to_cart/{product_id}', [ShoppingCartController::class, 'store'])->name('shopping_cart.store');
    Route::get('/shopping_cart/destroyAll', [ShoppingCartController::class, 'destroyAll'])->name('shopping_cart.destroyAll');
    Route::get('/shopping_cart/destroy/{id}', [ShoppingCartController::class, 'destroy'])->name('shopping_cart.destroy');
    Route::get('/shopping_cart', [ShoppingCartController::class, 'index'])->name('shopping_cart.index');
    Route::post('/shopping_cart/add_promo', [ShoppingCartController::class, 'add_promo'])->name('shopping_cart.add_promo');
//    Route::get('/make_payment', [ShoppingCartController::class, 'make_payment'])->name('payment.index');



    Route::get('/', function () {
        return view('pages.frontend.index');
    })->name('index');
    Route::get('/', [FrontProductController::class, 'index'])->name('index');
    Route::get('/category/{category_dtl_id}', [FrontProductController::class, 'category'])->name('front_product.category');
    Route::get('/product/{product_id}', [FrontProductController::class, 'detail'])->name('front_product.detail');

    Route::get('/checkout', function () {
        return view('pages.frontend.checkout');
    })->name('checkout');

    Route::get('/contact', function () {
        return view('pages.frontend.contact');
    })->name('contact');

    Route::get('/details', function () {
        return view('pages.frontend.details');
    })->name('details');

    // Route::get('/register', function () {
    //     return view('pages.frontend.register');
    // })->name('register');

    Route::get('/women', function () {
        return view('pages.frontend.women');
    })->name('women');


    Route::get('/test', function () {
        dd(Auth::guard('customer')->check());
    });
    Route::post('/login', [FrontCustomerController::class, 'login'])->name('customer.login');
    Route::get('/logout', function () {
        Auth::guard('customer')->logout();
    });
    Route::get('/register', [FrontCustomerController::class, 'showRegisterForm'])->name('customer.index');
    Route::post('/register', [FrontCustomerController::class, 'register'])->name('customer.register');
    Route::get('/user', [FrontCustomerController::class, 'userDetail'])->name('customer.detail');
    Route::post('/user', [FrontCustomerController::class, 'updateDetail'])->name('customer.detail.update');
    Route::post('/password/update', [FrontCustomerController::class, 'passwordUpdate'])->name('customer.password.update');
});
