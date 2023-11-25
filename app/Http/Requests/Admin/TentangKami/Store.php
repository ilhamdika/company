<?php

namespace App\Http\Requests\Admin\TentangKami;

use App\Models\AboutUs;
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
    public function rules(AboutUs $aboutUs)
    {
        return [
            'tentang_kami' => 'nullable|string',
            'image' => 'nullable|image',
            'perusahaan_saat_ini' => 'nullable|string',
            'visi' => 'nullable|string',
            'misi' => 'nullable|string',
        ];
    }
}
