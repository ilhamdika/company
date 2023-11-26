<?php

use App\Http\Controllers\Admin\AdministrasiC;
use App\Http\Controllers\Admin\Akademik;
use App\Http\Controllers\Admin\ArtikelController;
use App\Http\Controllers\Admin\LandingAdmin;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\Services;
use App\Http\Controllers\Admin\ServicesController;
use App\Http\Controllers\Admin\TentangKami;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Admin\ContactUsController;
use App\Http\Controllers\Admin\DukunganLayanan;
use App\Http\Controllers\Admin\FisikMental;
use App\Http\Controllers\Admin\KemampuanFisik;
use App\Http\Controllers\Admin\Keterampilan;
use App\Http\Controllers\Admin\MentalIdeologi;
use App\Http\Controllers\Admin\Pengetahuan;
use App\Http\Controllers\Admin\Rekrutmen;
use App\Http\Controllers\Admin\StrukturOrganisasi;
use App\Http\Controllers\Admin\TugasPokok;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// route::get('admin', function () {
//     return 'admin';
// })->middleware('role:admin');

// route::get('user', function () {
//     return 'user';
// })->middleware('role:user');

Route::middleware(['auth', 'role:admin'])->prefix('dashboard')->name('admin.dashboard.')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('portfolio', PortfolioController::class);
    Route::resource('news', NewsController::class);
    Route::resource('artikel', ArtikelController::class);
    Route::resource('services', Services::class);
    Route::resource('contact', ContactUsController::class);
    Route::resource('tentang-kami', TentangKami::class);
    Route::resource(('struktur-organisasi'), StrukturOrganisasi::class);
    Route::resource('dukungan-layanan', DukunganLayanan::class);
    Route::resource('tugas-pokok', TugasPokok::class);
    Route::resource('rekrutmen', Rekrutmen::class);
    Route::resource('administrasi', AdministrasiC::class);
    Route::resource('mental-ideologi', MentalIdeologi::class);
    Route::resource('kemampuan-fisik', KemampuanFisik::class);
    Route::get('pengetahuan', [Pengetahuan::class, 'index'])->name('pengetahuan.index');
    Route::resource('fisik-mental', FisikMental::class);
    Route::resource('akademik', Akademik::class);
    Route::resource('keterampilan', Keterampilan::class);

    Route::get('landing', [LandingAdmin::class, 'index'])->name('landing.index');
    // Route::get('/tentang-kami', [TentangKami::class, 'index'])->name('tentang-kami.index');
    // Route::get('/services', [Services::class, 'index'])->name('services.index');
    // Route::get('/services/create', [Services::class, 'create'])->name('services.create');

    // Route::get('news', [NewsController::class, 'index'])->name('news.index');
    // Route::get('news/create', [NewsController::class, 'create'])->name('news.create');
    // Route::post('news_create', [NewsController::class, 'store'])->name('news.store');
    // Route::get('news/{news}/edit', [NewsController::class, 'edit'])->name('news.edit');
    // Route::delete('news/{news}', [NewsController::class, 'destroy'])->name('news.destroy');
    // Route::put('news_update/{news}', [NewsController::class, 'update'])->name('news.update');

    // Route::get('artikel', [ArtikelController::class, 'index'])->name('artikel.index');
    // Route::get('artikel/create', [ArtikelController::class, 'create'])->name('artikel.create');
});

// Route::get('/', function () {
//     return Inertia::render('User/Index');
// });

Route::prefix('/')->name('user.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::get('/portfolio', [UserController::class, 'portfolio'])->name('portfolio');
    Route::get('/tentang-kami', [UserController::class, 'tentangKami'])->name('tentang-kami');
    Route::get('/services', [UserController::class, 'services'])->name('services');

    Route::get('berita', [UserController::class, 'berita'])->name('berita');
    Route::get('berita/{berita:slug}', [UserController::class, 'berita_detail'])->name('berita_detail');

    Route::get('artikel', [UserController::class, 'artikel'])->name('artikel');
    Route::get('artikel/{artikel:slug}', [UserController::class, 'artikel_detail'])->name('artikel_detail');
});


Route::prefix('prototype')->group(function () {
    route::get('index', function () {
        return Inertia::render('Prototype/Index');
    });
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
