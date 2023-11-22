<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'motto',
        'slug',
        'image',
        'tugas1',
        'tugas2',
        'deskripsi'
    ];
}
