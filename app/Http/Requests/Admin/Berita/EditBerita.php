<?php

namespace App\Http\Requests\Admin\Berita;

use App\Models\News;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EditBerita extends FormRequest
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
    public function rules(News $news)
    {
        return [
            'title' => 'nullable|string' . $news->id,
            'image' => 'nullable|image',
            'content' => 'nullable|string',
            'date' => 'nullable|date',
        ];
    }
}
