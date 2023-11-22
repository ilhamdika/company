<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Services\EditServices;
use App\Http\Requests\Admin\Services\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Services as ServicesModel;


class Services extends Controller
{
    public function index()
    {
        $services = ServicesModel::orderBy('created_at', 'desc')->get();
        return Inertia('Admin/Services/Index', [
            'services' => $services
        ]);
    }

    public function create()
    {
        return Inertia('Admin/Services/Create');
    }

    public function store(Store $request)
    {
        // return $request->all();
        $data = $request->validated();
        $data['image'] = Storage::disk('public')->put('services', $request->file('image'));
        $data['slug'] = Str::slug($request->title);

        ServicesModel::create($data);

        return redirect()->route('admin.dashboard.services.index')->with([
            'message' => 'Services created successfully',
            'type' => 'success'
        ]);
    }

    public function edit(ServicesModel $service)
    {
        return Inertia::render('Admin/Services/Edit', [
            'service' => $service
        ]);
    }

    public function update(EditServices $request, ServicesModel $service)
    {
        try {
            $data = $request->validated();
            if ($request->file('image')) {
                $data['image'] = Storage::disk('public')->put('services', $request->file('image'));
                Storage::disk('public')->delete($service->image);
            } else {
                $data['image'] = $service->image;
            }
            $data['slug'] = Str::slug($request->title);
            $service->update($data);
            return Inertia::location(redirect(route('admin.dashboard.services.index'))->with([
                'message' => 'Services updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(ServicesModel $service)
    {
        try {
            $service->delete();
            Storage::disk('public')->delete($service->image);
            return redirect()->back()->with([
                'message' => 'Services deleted successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
