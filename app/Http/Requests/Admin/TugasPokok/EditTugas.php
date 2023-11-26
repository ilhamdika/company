<?php

namespace App\Http\Requests\Admin\TugasPokok;

use App\Models\TugasPokok;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditTugas extends FormRequest
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
    public function rules(TugasPokok $tugasPokok)
    {
        return [
            'title' => 'nullable|string' . $tugasPokok->id,
        ];
    }
}
