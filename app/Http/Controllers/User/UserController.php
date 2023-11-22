<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Portfolio;
use App\Models\Artikel;
use App\Models\News;

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
        $berita = News::orderBy('created_at', 'desc')->get();
        return Inertia('User/Berita', [
            'beritas' => $berita
        ]);
    }

    public function berita_detail(News $berita)
    {
        return Inertia::render('User/BeritaDetail', [
            'berita' => $berita
        ]);
    }

    public function artikel()
    {
        $artikel = Artikel::all();
        return Inertia('User/Artikel', [
            'artikels' => $artikel
        ]);
    }

    public function artikel_detail(Artikel $artikel)
    {
        return Inertia::render('User/ArtikelDetail', [
            'artikel' => $artikel
        ]);
    }
}
