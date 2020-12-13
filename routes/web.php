<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    Artisan::call('config:clear');
    return 'Cache cleared';
});


Route::group(['domain' => 'www.a.com'], function () {
    Route::any('/',function (){
        return response('a');
    });

});


Route::group(['domain' => 'www.b.cn'], function () {
    Route::any('/',function (){
        return response('b');
    });

});

Route::redirect('/', '/home');
Auth::routes();
Route::redirect('/register', '/login');

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/customer',[CustomerController::class,'index'])->name('customer.index');


