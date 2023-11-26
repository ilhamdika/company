<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FisikMental as FisikMentalModel;
use App\Models\Akademik as AkademikModel;
use App\Models\Keterampilan as KeterampilanModel;

class Pengetahuan extends Controller
{
    public function index()
    {
        $fisik_mental = FisikMentalModel::all();
        $akademik = AkademikModel::all();
        $keterampilan = KeterampilanModel::all();
        return inertia('Admin/Pengetahuan/Index', [
            'fisik_mental' => $fisik_mental,
            'akademik' => $akademik,
            'keterampilan' => $keterampilan
        ]);
    }
}
