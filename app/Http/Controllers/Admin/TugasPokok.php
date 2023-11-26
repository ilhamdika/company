<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TugasPokok\EditTugas;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Admin\TugasPokok\Store;
use App\Models\TugasPokok as TugasPokokModel;

class TugasPokok extends Controller
{
    public function index()
    {
        $tugasPokok = TugasPokokModel::all();
        return inertia('Admin/TugasPokok/Index',  [
            'tugasPokok' => $tugasPokok
        ]);
    }

    public function create()
    {
        return inertia('Admin/TugasPokok/Create');
    }

    public function store(Store $request)
    {
        try {
            $data = $request->validated();
            TugasPokokModel::create($data);
            return redirect()->route('admin.dashboard.tugas-pokok.index')->with([
                'message' => 'Tugas Pokok created successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function edit($id)
    {
        $tugasPokok = TugasPokokModel::find($id);
        return inertia('Admin/TugasPokok/Edit', [
            'tugasPokok' => $tugasPokok
        ]);
    }

    public function update(EditTugas $request, TugasPokokModel $tugasPokok)
    {
        try {
            $data = $request->validated();
            $tugasPokok->update($data);
            return Inertia::location(redirect(route('admin.dashboard.tugas-pokok.index'))->with([
                'message' => 'Tugas Pokok updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(TugasPokokModel $tugasPokok)
    {
        try {
            $tugasPokok->delete();
            return redirect()->route('admin.dashboard.tugas-pokok.index')->with([
                'message' => 'Dukungan Layanan deleted successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
