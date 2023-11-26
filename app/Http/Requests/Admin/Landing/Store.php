<?php

namespace App\Http\Requests\Admin\Landing;

use App\Models\Landing;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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
    public function rules(Landing $landing)
    {
        return [
            'title_hero' => 'nullable|string|max:255' . $landing->id,
            'title_hero_sub' => 'nullable|string|max:255',
            'motto_title' => 'nullable|string|max:255',
            'motto_sub' => 'nullable|string|max:255',
            'branding_title' => 'nullable|string|max:255',
            'branding_sub' => 'nullable|string|max:255',

        ];
    }
}
