<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/home','photoAlbomsController@addAlbom');
Route::post('/removeAlbom/{id}','photoAlbomsController@removeAlbom');
Route::post('/editAlbom/{id}','photoAlbomsController@editAlbom');

Route::post('/addPhoto','photoAlbomsController@addPhoto');
Route::post('/store_file', 'photoAlbomsController@fileStore');

Route::delete('/photo/{id}','photoAlbomsController@delete');

Route::get('/getAlbom/{id}','photoAlbomsController@getAlbom');
Route::get('/getPhoto/{id}','photoAlbomsController@getPhotos');

