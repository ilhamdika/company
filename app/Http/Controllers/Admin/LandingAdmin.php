<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Landing\Store;
use App\Models\Landing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingAdmin extends Controller
{
    public function index()
    {
        $landing = Landing::first();
        return Inertia('Admin/Landing/Index', [
            'landing' => $landing
        ]);
    }

    public function update(Store $request, Landing $landing)
    {
        // return $request;
        try {
            $data = $request->validated();
            $landing->update($data);
            return Inertia::location(redirect(route('admin.dashboard.landing.index'))->with([
                'message' => 'Landing updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
