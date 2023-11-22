<?php

namespace App\Http\Requests\Admin\Artikel;

use App\Models\Artikel;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditArtikel extends FormRequest
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
    public function rules(Artikel $artikel)
    {
        return [
            'title' => 'nullable|string' . $artikel->id,
            'image' => 'nullable|image',
            'content' => 'nullable|string',
            'date' => 'nullable|date',
        ];
    }
}
