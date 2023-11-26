<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Rekrutmen\EditRek;
use App\Http\Requests\Admin\Rekrutmen\Store;
use App\Models\Administrasi;
use Illuminate\Http\Request;
use App\Models\Rekrutmen as RekrutmenModel;
use App\Models\MentalIdeologi as MentalIdeologiModel;
use App\Models\KemampuanFisik;
use Inertia\Inertia;

class Rekrutmen extends Controller
{
    public function index()
    {
        $rekrutmen = RekrutmenModel::all();
        $administrasi = Administrasi::all();
        $mental_ideologi = MentalIdeologiModel::all();
        $kemampuan_fisik = KemampuanFisik::all();
        return inertia('Admin/Rekrutmen/Index', [
            'rekrutmen' => $rekrutmen,
            'administrasi' => $administrasi,
            'mental_ideologi' => $mental_ideologi,
            'kemampuan_fisik' => $kemampuan_fisik,
        ]);
    }

    public function create()
    {
        return inertia('Admin/Rekrutmen/Create');
    }

    public function store(Store $request)
    {
        try {
            $data = $request->validated();
            RekrutmenModel::create($data);
            return redirect()->route('admin.dashboard.rekrutmen.index')->with([
                'message' => 'Rekrutmen created successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function edit($id)
    {
        $rekrutmen = RekrutmenModel::find($id);
        return inertia('Admin/Rekrutmen/Edit', [
            'rekrutmen' => $rekrutmen
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        $item = RekrutmenModel::find($id);
        $item->update([
            'title' => $request->title,
        ]);

        return Inertia::location(redirect(route('admin.dashboard.rekrutmen.index'))->with([
            'message' => 'Rekrutmen Layanan updated successfully',
            'type' => 'success'
        ]));
    }

    public function destroy($id)
    {
        $item = RekrutmenModel::find($id);
        $item->delete();
        return redirect()->route('admin.dashboard.rekrutmen.index')->with([
            'message' => 'Rekrutmen deleted successfully',
            'type' => 'success'
        ]);
    }
}
