<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StrukturOrganisasi\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\StrukturOrganisasi as StrukturOrganisasiModel;
use App\Http\Requests\Admin\StrukturOrganisasi\EditOrganisasi;

class StrukturOrganisasi extends Controller
{
    public function index()
    {
        $strukturOrganisasi = StrukturOrganisasiModel::all();
        return inertia('Admin/StrukturOrganisasi/Index', [
            'strukturOrganisasi' => $strukturOrganisasi
        ]);
    }

    public function create()
    {
        return inertia('Admin/StrukturOrganisasi/Create');
    }

    public function store(Store $request)
    {
        try {
            $data = $request->validated();
            StrukturOrganisasiModel::create($data);
            return redirect()->route('admin.dashboard.struktur-organisasi.index')->with([
                'message' => 'Struktur Organisasi created successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function edit(StrukturOrganisasiModel $strukturOrganisasi)
    {
        return Inertia('Admin/StrukturOrganisasi/Edit', [
            'strukturOrganisasi' => $strukturOrganisasi
        ]);
    }

    public function update(EditOrganisasi $request, StrukturOrganisasiModel $strukturOrganisasi)
    {
        try {
            $data = $request->validated();
            $strukturOrganisasi->update($data);
            return Inertia::location(redirect(route('admin.dashboard.struktur-organisasi.index'))->with([
                'message' => 'Struktur Organisasi updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(StrukturOrganisasiModel $strukturOrganisasi)
    {
        try {
            $strukturOrganisasi->delete();
            return redirect()->route('admin.dashboard.struktur-organisasi.index')->with([
                'message' => 'Struktur Organisasi deleted successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
