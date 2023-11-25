<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DukunganLayanan\EditDukungan;
use App\Http\Requests\Admin\DukunganLayanan\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DukunganLayanan as DukunganLayananModel;

class DukunganLayanan extends Controller
{
    public function index()
    {
        $dukunganLayanan = DukunganLayananModel::all();
        return inertia('Admin/DukunganLayanan/Index', [
            'dukunganLayanan' => $dukunganLayanan
        ]);
    }

    public function create()
    {
        return inertia('Admin/DukunganLayanan/Create');
    }

    public function store(Store $request)
    {
        try {
            $data = $request->validated();
            DukunganLayananModel::create($data);
            return redirect()->route('admin.dashboard.dukungan-layanan.index')->with([
                'message' => 'Dukungan Layanan created successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function edit($id)
    {
        $dukunganLayanan = DukunganLayananModel::find($id);
        return inertia('Admin/DukunganLayanan/Edit', [
            'dukunganLayanan' => $dukunganLayanan
        ]);
    }

    public function update(EditDukungan $request, DukunganLayananModel $dukunganLayanan)
    {
        try {
            $data = $request->validated();
            $dukunganLayanan->update($data);
            return Inertia::location(redirect(route('admin.dashboard.dukungan-layanan.index'))->with([
                'message' => 'Dukungan Layanan updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(DukunganLayananModel $dukunganLayanan)
    {
        try {
            $dukunganLayanan->delete();
            return redirect()->route('admin.dashboard.dukungan-layanan.index')->with([
                'message' => 'Dukungan Layanan deleted successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
