<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products', 'ProductController@index');
Route::post('newProduct', 'ProductController@store');
Route::post('searchProduct', 'ProductController@search');
Route::put('updateProduct/{id}', 'ProductController@edit');
Route::get('alterStatusProduct/{id}/{status}', 'ProductController@alterStatus');
Route::get('getProduct/{id}', 'ProductController@index');
Route::delete('deleteProduct/{id}', 'ProductController@remove');
