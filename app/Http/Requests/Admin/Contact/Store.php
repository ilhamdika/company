<?php

namespace App\Http\Requests\Admin\Contact;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(Contact $contact)
    {
        return [
            'instagram' => 'nullable|string|max:255' . $contact->id,
            'facebook' => 'nullable|string|max:255',
            'youtube' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'linkedin' => 'nullable|string|max:255',
            'whatapps' => 'nullable|string|max:255',
            'whatapps2' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'telegram' => 'nullable|string|max:255',
        ];
    }
}
