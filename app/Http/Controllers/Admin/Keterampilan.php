<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Keterampilan as KeterampilanModel;
use Inertia\Inertia;

class Keterampilan extends Controller
{
    public function create()
    {
        return inertia('Admin/Pengetahuan/Keterampilan/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = KeterampilanModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Keterampilan updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $item = KeterampilanModel::find($id);
        return inertia('Admin/Pengetahuan/Keterampilan/Edit', [
            'keterampilan' => $item
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = KeterampilanModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Keterampilan updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = KeterampilanModel::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Keterampilan deleted successfully',
            'type' => 'success'
        ]));
    }
}
