<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LandingAdmin extends Controller
{
    public function index()
    {
        return Inertia('Admin/Landing/Index');
    }
}
