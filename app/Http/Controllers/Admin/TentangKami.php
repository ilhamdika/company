<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TentangKami extends Controller
{
    public function index()
    {
        return Inertia('Admin/Tentang/Index');
    }
}
