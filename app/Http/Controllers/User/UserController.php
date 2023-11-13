<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia('User/Index');
    }

    public function portfolio()
    {
        return Inertia('User/Portfolio');
    }
}
