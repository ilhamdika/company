<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MentalIdeologi as MentalIdeologiModel;
use Inertia\Inertia;

class MentalIdeologi extends Controller
{
    public function create()
    {
        return inertia('Admin/Rekrutmen/MentalIdeologi/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = MentalIdeologiModel::create([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'MentalIdeologi updated successfully',
            'type' => 'success'
        ]));
    }

    public function edit($id)
    {
        $mental_ideologi = MentalIdeologiModel::find($id);
        return inertia('Admin/Rekrutmen/MentalIdeologi/Edit', [
            'mental_ideologi' => $mental_ideologi
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = MentalIdeologiModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'MentalIdeologi updated successfully',
            'type' => 'success'
        ]));
    }
}
