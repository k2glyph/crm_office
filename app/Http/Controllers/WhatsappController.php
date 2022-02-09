<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use GuzzleHttp\Client;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class WhatsappController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function addWhatsapp(){
        $day = Carbon::now()->isoFormat('D MMMM YYYY');
        // $client = new Client();
        // $qrcode = "https://restfull-whatsapp-api.herokuapp.com/qr-code";

        // $response = $client->request('GET', $qrcode, [
        //     'verify'  => false,
        // ]);

        // $qrcodes = json_decode($response->getBody(), true);

        // //$img_url = QrCode::generate($qrcodes['url']);
        // dd($qrcodes);

        return view ('addWhatsapp', compact('day'));
    }

    public function ChatWhatsapp(){
        $day = Carbon::now()->isoFormat('D MMMM YYYY');
        return view ('chatWhatsapp', compact('day'));
    }

    public function EntryWhatsapp(){
        $day = Carbon::now()->isoFormat('D MMMM YYYY');
        return view ('entryWhatsapp', compact('day'));
    }
}
