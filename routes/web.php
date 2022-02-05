<?php

use GuzzleHttp\Client;
use Carbon\Carbon;
use App\Http\Controllers\WhatsappController;
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

Route::get('/', function () {
    $day = Carbon::now()->isoFormat('D MMMM YYYY');
    $client = new Client(); //GuzzleHttp\Client
    $url = "https://api.pwkbackoffice.com/api/leads";


    $response = $client->request('GET', $url, [
        'verify'  => false,
    ]);

    $leads = json_decode($response->getBody(), true);
    return view('index', compact('day'))->with('leads', $leads);
});

// Route::get('/', [HomeController::class, 'index']);
Route::get('/addWhatsapp', [WhatsappController::class, 'addWhatsapp'])->name('addwhatsapp');
Route::get('/chatform', [WhatsappController::class, 'chatWhatsapp'])->name('chatwhatsapp');

