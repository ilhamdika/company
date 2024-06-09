<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Berita\EditBerita;
use App\Http\Requests\Admin\Berita\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class NewsController extends Controller
{
    public function index()
    {
        $berita = News::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/Berita/Index', [
            'beritas' => $berita
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Berita/Create');
    }

    public function store(Store $request)
    {
        $randomNumber = mt_rand(1, 100);
        $randomString = Str::random(10);
        $data = $request->validated();
        $data['image'] = Storage::disk('public')->put('berita', $request->file('image'));
        $data['slug'] = $randomNumber . '-' . Str::slug($request->title) . '-' . $randomString;

        News::create($data);

        return redirect()->route('admin.dashboard.news.index')->with([
            'message' => 'Berita created successfully',
            'type' => 'success'
        ]);
    }

    public function edit(News $news)
    {
        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $news
        ]);
    }

    public function update(EditBerita $request, News $news)
    {
        // return $request->all();
        try {
            $randomNumber = mt_rand(1, 100);
            $randomString = Str::random(10);
            $data = $request->validated();
            if ($request->file('image')) {
                $data['image'] = Storage::disk('public')->put('berita', $request->file('image'));
                Storage::disk('public')->delete($news->image);
            } else {
                $data['image'] = $news->image;
            }

            $data['slug'] = $randomNumber . '-' . Str::slug($request->title) . '-' . $randomString;

            $news->update($data);
            return Inertia::location(redirect(route('admin.dashboard.news.index'))->with([
                'message' => 'Berita updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(News $news)
    {
        $news->delete();

        Storage::disk('public')->delete($news->image);
        return redirect()->back()->with([
            'message' => 'Portfolio deleted successfully',
            'type' => 'success'
        ]);
    }
}
