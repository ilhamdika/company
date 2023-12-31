<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'instagram',
        'facebook',
        'youtube',
        'email',
        'phone',
        'address',
        'linkedin',
        'whatapps',
        'whatapps2',
        'twitter',
        'telegram'
    ];
}
