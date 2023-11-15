<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Portfolio;

class UserController extends Controller
{
    public function index()
    {
        return Inertia('User/Index');
    }

    public function portfolio()
    {
        $portfolios = Portfolio::all();
        return Inertia::render('User/Portfolio', [
            'portfolios' => $portfolios
        ]);
        // return Inertia('User/Portfolio');
    }

    public function tentangKami()
    {
        return Inertia('User/TentangKami');
    }

    public function services()
    {
        return Inertia('User/Services');
    }

    public function berita()
    {
        return Inertia('User/Berita');
    }

    public function artikel()
    {
        return Inertia('User/Artikel');
    }
}
