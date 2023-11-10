<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Portfolio\Store;
use App\Http\Requests\Admin\Portfolio\EditPortfolio;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $porfolios = Portfolio::all();
        return Inertia('Admin/Portfolio/Index', [
            'portfolios' => $porfolios
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia('Admin/Portfolio/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        // return $request->all();
        try {
            $data = $request->validated();
            $data['image'] = Storage::disk('public')->put('portfolio', $request->file('image'));
            Portfolio::create($data);
            return redirect()->route('admin.dashboard.portfolio.index')->with([
                'message' => 'Portfolio created successfully',
                'type' => 'success'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function show(Portfolio $portfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function edit(Portfolio $portfolio)
    {
        return Inertia('Admin/Portfolio/Edit', [
            'portfolio' => $portfolio
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function update(EditPortfolio $request, Portfolio $portfolio)
    {
        try {
            $data = $request->validated();
            if ($request->file('image')) {
                $data['image'] =  Storage::disk('public')->put('portfolio', $request->file('image'));
                Storage::disk('public')->delete($portfolio->image);
            } else {
                $data['image'] = $portfolio->image;
            }

            $portfolio->update($data);

            return Inertia::location(redirect(route('admin.dashboard.portfolio.index'))->with([
                'message' => 'Portfolio updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Portfolio $portfolio)
    {
        $portfolio->delete();

        Storage::disk('public')->delete($portfolio->image);
        return redirect()->back()->with([
            'message' => 'Portfolio deleted successfully',
            'type' => 'success'
        ]);
    }
}
