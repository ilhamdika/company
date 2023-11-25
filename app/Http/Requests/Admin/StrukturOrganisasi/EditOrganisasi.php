<?php

namespace App\Http\Requests\Admin\StrukturOrganisasi;

use App\Models\StrukturOrganisasi;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditOrganisasi extends FormRequest
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
    public function rules(StrukturOrganisasi $strukturOrganisasi)
    {
        return [
            'nama' => 'nullable|string|max:255' . $strukturOrganisasi->id,
            'jabatan' => 'nullable|string|max:255',
        ];
    }
}
