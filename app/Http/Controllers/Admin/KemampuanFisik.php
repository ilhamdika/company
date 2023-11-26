<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\KemampuanFisik as KemampuanFisikModel;
use Inertia\Inertia;

class KemampuanFisik extends Controller
{
    public function create()
    {
        return inertia('Admin/Rekrutmen/KemampuanFisik/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = KemampuanFisikModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'KemampuanFisik updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $kemampuan_fisik = KemampuanFisikModel::find($id);
        return inertia('Admin/Rekrutmen/KemampuanFisik/Edit', [
            'kemampuan_fisik' => $kemampuan_fisik
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = KemampuanFisikModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'KemampuanFisik updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = KemampuanFisikModel::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'KemampuanFisik deleted successfully',
            'type' => 'success'
        ]));
    }
}
