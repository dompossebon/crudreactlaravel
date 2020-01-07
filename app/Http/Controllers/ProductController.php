<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $client = new Client();
        $detail = empty($request->id) ? '?cmd=list' : '?cmd=details&id=' . $request->id;
        $response = $client->get('http://18.228.14.48/api/products' . $detail);
        return $response->getBody();
    }

    public function search(Request $request)
    {
        $status = empty($request->status) ? null : $request->status;
        $short_description = empty($request->short_description) ? null : $request->short_description;
        $code = empty($request->code) ? null : $request->code;

        $client = new Client();
        $response = $client->get('http://18.228.14.48/api/products?cmd=list');


        $filter_list = json_decode($response->getBody(), true);

        foreach ($filter_list as $filter) {
            if (in_array($status, $filter)
                || strpos($filter['short_description'], $short_description) !== false
                || strpos($filter['code'], $code) !== false
            ) {
                $filtered[] =
                    [
                        'id' => $filter['id'],
                        'code' => $filter['code'],
                        'short_description' => $filter['short_description'],
                        'description' => $filter['description'],
                        'status' => $filter['status'],
                        'value' => $filter['value'],
                        'qty' => $filter['qty'],
                    ];
            }
        }

        if ($status == null && $short_description == null && $code == null) {
            $filtered = $filter_list;
        }

        if(empty($filtered)){
            $filtered = $filter_list;
        }


        return $filtered;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string|max:150',
            'short_description' => 'required|string|max:30',
            'code' => 'required|string|max:10',
            'status' => 'required',
            'value' => 'required|numeric',
            'qty' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $client = new Client();
        $response = $client->request('POST', 'http://18.228.14.48/api/products', [
            'form_params' => [
                'description' => $request->description,
                'short_description' => $request->short_description,
                'code' => $request->code,
                'status' => $request->status,
                'value' => $request->value,
                'qty' => $request->qty,
            ]
        ]);

//        return $response->getBody();

        return response()->json('Produto cadastrado!');
    }

    public function edit(Request $request)
    {
        $client = new Client();
        $response = $client->request('PUT', 'http://18.228.14.48/api/products/' . $request->id, [
            'form_params' => [
                'description' => $request->description,
                'short_description' => $request->short_description,
                'code' => $request->code,
                'status' => $request->status,
                'value' => $request->value,
                'qty' => $request->qty,
            ]
        ]);
        return response()->json('Produto Atualizado!');
    }

    public function remove(Request $request)
    {

        $client = new Client();
        $response = $client->delete('http://18.228.14.48/api/products/' . $request->id);

        return "Produto removido";
    }

    public function alterStatus(Request $request)
    {
        $status = "enable";
        if ($request->status == "enable") {
            $status = "disable";
        }
        $client = new Client();
        $response = $client->request('PUT', 'http://18.228.14.48/api/products/' . $request->id, [
            'form_params' => [
                'status' => $status,
            ]
        ]);

        return response()->json('Produto teve seu Status Modificado!');
    }

}
