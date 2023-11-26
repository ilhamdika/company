<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BentukKerjasama as BentukKerjasamaModel;
use Inertia\Inertia;

class BentukKerjasama extends Controller
{
    public function index()
    {
        $bentuk_kerjasama = BentukKerjasamaModel::all();
        return inertia('Admin/BentukKerjasama/Index', [
            'bentuk_kerjasama' => $bentuk_kerjasama
        ]);
    }

    public function create()
    {
        return inertia('Admin/BentukKerjasama/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = BentukKerjasamaModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.bentuk-kerjasama.index'))->with([
            'message' => 'Bentuk Kerjasama updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $item = BentukKerjasamaModel::find($id);
        return inertia('Admin/BentukKerjasama/Edit', [
            'bentuk_kerjasama' => $item
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = BentukKerjasamaModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.bentuk-kerjasama.index'))->with([
            'message' => 'Bentuk Kerjasama updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = BentukKerjasamaModel::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.bentuk-kerjasama.index'))->with([
            'message' => 'Bentuk Kerjasama deleted successfully',
            'type' => 'success'
        ]));
    }
}
