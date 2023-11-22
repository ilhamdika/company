<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Artikel\EditArtikel;
use App\Http\Requests\Admin\Artikel\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Artikel;

class ArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Artikel/Index', [
            'artikels' => $artikel
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Artikel/Create');
    }

    public function store(Store $request)
    {
        $data = $request->validated();
        $data['image'] = Storage::disk('public')->put('artikel', $request->file('image'));
        $data['slug'] = Str::slug($request->title);

        Artikel::create($data);

        return redirect()->route('admin.dashboard.artikel.index')->with([
            'message' => 'Artikel created successfully',
            'type' => 'success'
        ]);
    }

    public function edit(Artikel $artikel)
    {
        return Inertia::render('Admin/Artikel/Edit', [
            'artikel' => $artikel
        ]);
    }

    public function update(EditArtikel $request, Artikel $artikel)
    {
        try {
            $data = $request->validated();
            if ($request->file('image')) {
                $data['image'] = Storage::disk('public')->put('artikel', $request->file('image'));
                Storage::disk('public')->delete($artikel->image);
            } else {
                $data['image'] = $artikel->image;
            }
            $data['slug'] = Str::slug($request->title);
            $artikel->update($data);
            return Inertia::location(redirect(route('admin.dashboard.artikel.index'))->with([
                'message' => 'Artikel updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(Artikel $artikel)
    {
        try {
            $artikel->delete();
            Storage::disk('public')->delete($artikel->image);
            return redirect()->back()->with([
                'message' => 'Artikel deleted successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'message' => 'Something went wrong',
                'type' => 'error'
            ]);
        }
    }
}
