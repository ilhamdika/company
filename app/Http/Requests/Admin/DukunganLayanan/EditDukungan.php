<?php

namespace App\Http\Requests\Admin\DukunganLayanan;

use App\Models\DukunganLayanan;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditDukungan extends FormRequest
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
    public function rules(DukunganLayanan $dukunganLayanan)
    {
        return [
            'title' => 'nullable|string' . $dukunganLayanan->id,
        ];
    }
}
