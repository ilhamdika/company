<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Contact\Store;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;

class ContactUsController extends Controller
{
    public function index()
    {
        $contact = Contact::first();
        return Inertia::render('Admin/Contact/Index', [
            'contact' => $contact
        ]);
    }

    public function update(Store $request, Contact $contact)
    {
        try {
            $data = $request->validated();
            $contact->update($data);
            return Inertia::location(redirect(route('admin.dashboard.contact.index'))->with([
                'message' => 'Services updated successfully',
                'type' => 'success'
            ]));
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
