<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Services extends Controller
{
    public function index()
    {
        return Inertia('Admin/Services/Index');
    }

    public function create()
    {
        return Inertia('Admin/Services/Create');
    }
}
