<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Artikel/Index');
    }

    public function create()
    {
        return Inertia::render('Admin/Artikel/Create');
    }
}
