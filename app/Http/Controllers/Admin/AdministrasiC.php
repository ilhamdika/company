<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrasi;
use Inertia\Inertia;

class AdministrasiC extends Controller
{
    public function create()
    {
        return inertia('Admin/Rekrutmen/Administrasi/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = Administrasi::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'Administrasi updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $administrasi = Administrasi::find($id);
        return inertia('Admin/Rekrutmen/Administrasi/Edit', [
            'administrasi' => $administrasi
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = Administrasi::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'Administrasi updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = Administrasi::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'Administrasi deleted successfully',
            'type' => 'success'
        ]));
    }
}
