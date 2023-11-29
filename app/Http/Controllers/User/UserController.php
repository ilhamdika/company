<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Portfolio;
use App\Models\Artikel;
use App\Models\News;
use App\Models\AboutUs;
use App\Models\Administrasi;
use App\Models\Contact;
use App\Models\DukunganLayanan;
use App\Models\MentalIdeologi;
use App\Models\Services;
use App\Models\Rekrutmen;
use App\Models\KemampuanFisik;
use App\Models\Landing;
use App\Models\TugasPokok;
use App\Models\FisikMental;
use App\Models\Akademik;
use App\Models\Keterampilan;
use App\Models\StrukturOrganisasi;
use App\Models\BentukKerjasama;

class UserController extends Controller
{
    public function index()
    {
        $landing = Landing::first();
        $berita = News::latest()->take(4)->get();
        $artikel = Artikel::latest()->take(4)->get();
        return Inertia('User/Index', [
            'landing' => $landing,
            'berita' => $berita,
            'artikel' => $artikel
        ]);
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
        $dukungan_layanan = DukunganLayanan::all();
        $tentang = AboutUs::first();
        $struktur_organisasi = StrukturOrganisasi::all();
        return Inertia('User/TentangKami', [
            'tentang' => $tentang,
            'dukungan_layanan' => $dukungan_layanan,
            'struktur_organisasi' => $struktur_organisasi
        ]);
    }

    public function services()
    {
        $services = Services::orderBy('created_at', 'desc')->get();
        return Inertia('User/Services', [
            'services' => $services
        ]);
    }

    public function services_detail($id)
    {
        $service = Services::find($id);
        return Inertia::render('User/ServicesDetail', [
            'service' => $service
        ]);
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
        $mungkinSuka = News::inRandomOrder()->limit(8)->get();
        return Inertia::render('User/BeritaDetail', [
            'berita' => $berita,
            'rekomens' => $mungkinSuka
        ]);
    }

    public function artikel()
    {

        $artikel = Artikel::orderBy('created_at', 'desc')->get();
        return Inertia('User/Artikel', [
            'artikels' => $artikel,
        ]);
    }

    public function artikel_detail(Artikel $artikel)
    {
        $mungkinSuka = Artikel::inRandomOrder()->limit(8)->get();
        return Inertia::render('User/ArtikelDetail', [
            'artikel' => $artikel,
            'rekomens' => $mungkinSuka
        ]);
    }

    public function karir()
    {
        $rekruitmen = Rekrutmen::all();
        $administrasi = Administrasi::all();
        $mental_ideologi = MentalIdeologi::all();
        $kemampuan_fisik = KemampuanFisik::all();
        $tugas_pokok = TugasPokok::all();
        $fisik_mental = FisikMental::all();
        $akademik = Akademik::all();
        $keterampilan = Keterampilan::all();
        $bentuk_kerjasama = BentukKerjasama::all();
        return Inertia('User/Karir', [
            'rekruitmens' => $rekruitmen,
            'administrasis' => $administrasi,
            'mental_ideologis' => $mental_ideologi,
            'kemampuan_fisiks' => $kemampuan_fisik,
            'tugas_pokoks' => $tugas_pokok,
            'fisik_mentals' => $fisik_mental,
            'akademiks' => $akademik,
            'keterampilans' => $keterampilan,
            'bentuk_kerjasamas' => $bentuk_kerjasama
        ]);
    }

    public function hubungiKami()
    {
        $contacts = Contact::first();
        return Inertia('User/HubungiKami', [
            'contacts' => $contacts
        ]);
    }
}
