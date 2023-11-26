<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FisikMental as FisikMentalModel;
use Inertia\Inertia;

class FisikMental extends Controller
{
    public function create()
    {
        return inertia('Admin/Pengetahuan/FisikMental/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = FisikMentalModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Fisik Mental updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $fisik_mental = FisikMentalModel::find($id);
        return inertia('Admin/Pengetahuan/FisikMental/Edit', [
            'fisik_mental' => $fisik_mental
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = FisikMentalModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Fisik Mental updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = FisikMentalModel::find($id);
        $item->delete();

        return Inertia::location(redirect(route('admin.dashboard.pengetahuan.index'))->with([
            'message' => 'Fisik Mental deleted successfully',
            'type' => 'success'
        ]));
    }
}
