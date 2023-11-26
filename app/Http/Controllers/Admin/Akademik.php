<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Akademik as AkademikModel;
use Inertia\Inertia;

class Akademik extends Controller
{
    public function create()
    {
        return inertia('Admin/Pengetahuan/Akademik/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = AkademikModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Akademik updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $item = AkademikModel::find($id);
        return inertia('Admin/Pengetahuan/Akademik/Edit', [
            'akademik' => $item
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = AkademikModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Akademik updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = AkademikModel::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Akademik deleted successfully',
            'type' => 'success'
        ]));
    }
}
