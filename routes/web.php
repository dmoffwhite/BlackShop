<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CartController;


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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/product', [ProductController::class, 'index']);
Route::get('/productByControl', [ProductController::class, 'show']);
Route::delete('/productDelete/{id}', [ProductController::class, 'destroy']);
Route::post('/productCreate', [ProductController::class, 'store']);
Route::put('/productUpdate/{id}', [ProductController::class, 'update']);
Route::get('/studentToken', [StudentController::class, 'showToken']);
Route::get('/productToken', [ProductController::class, 'showToken']);
Route::get('/category', [ProductController::class, 'showCategory']);
Route::get('/cart', [CartController::class, 'index']);
Route::get('/cartToken', [CartController::class, 'showToken']);
Route::post('/cartCreate', [CartController::class, 'create']);
Route::delete('/cartDelete/{id}', [CartController::class, 'destroy']);