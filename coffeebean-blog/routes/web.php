<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/



$router->group(['middleware' => 'CORS'], function () use($router){
    $router->get('/posts/count', ['uses' => 'PostController@count']);
    $router->get('/posts/page/{page}/{limit}', ['uses' => 'PostController@paginate']);
    $router->options('/posts/page/{page}/{limit}', ['uses' => 'PostController@paginate']);
    $router->get('/posts/{max}', ['uses' => 'PostController@latest']);
    $router->get('/posts/post/{slug}', ['uses' => 'PostController@show']);
});

$router->get('/', function () use ($router) {
    return view('index');
});
$router->get('/{any}', function () use ($router) {
    return view('index');
});
$router->get('/{any}/{another}', function () use ($router) {
    return view('index');
});
$router->get('/{any}/{another}/{anotherOne}', function () use ($router) {
    return view('index');
});

// $router->get('/migrate', function(){
//     \Illuminate\Support\Facades\Artisan::call('db:seed');
// });
