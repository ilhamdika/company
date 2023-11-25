<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TentangKami\EditTentang;
use App\Http\Requests\Admin\TentangKami\Store;
use App\Models\AboutUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TentangKami extends Controller
{
    public function index()
    {
        $about = AboutUs::first();
        return Inertia('Admin/Tentang/Index', [
            'about' => $about
        ]);
    }

    public function update(EditTentang $request, AboutUs $about)
    {
        try {
            $about = AboutUs::first();
            $data = $request->validated();
            if ($request->file('image')) {
                $data['image'] = Storage::disk('public')->put('about', $request->file('image'));
                Storage::disk('public')->delete($about->image);
            } else {
                $data['image'] = $about->image;
            }
            $about->update($data);
            return Inertia::location(redirect(route('admin.dashboard.tentang-kami.index'))->with([
                'message' => 'About updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
