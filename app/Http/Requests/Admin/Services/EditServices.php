<?php

namespace App\Http\Requests\Admin\Services;

use App\Models\Services;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditServices extends FormRequest
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
    public function rules(Services $services)
    {
        return [
            'title' => 'nullable|string|max:255' . $services->id,
            'motto' => 'nullable|string|max:255',
            'image' => 'nullable|image',
            'tugas1' => 'nullable|string',
            'tugas2' => 'nullable|string',
            'deskripsi' => 'nullable|string',
        ];
    }
}
