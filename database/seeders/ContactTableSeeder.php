<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contact::create([
            'instagram' => 'https://www.instagram.com/official_himasi/',
            'facebook' => 'https://www.facebook.com/himasipolines/',
            'youtube' => 'https://www.youtube.com/channel/UCQ4Z6Q6Z3Z6Z6Z6Z6Z6Z6Z6',
            'email' => 'email@gmail.com',
            'phone' => '081234567890',
            'address' => 'Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111',
            'linkedin' => 'https://www.linkedin.com/company/himasi-its/',
            'whatapps' => 'https://wa.me/6281234567890',
            'twitter' => 'https://twitter.com/himasipolines',
            'telegram' => 'https://t.me/himasipolines',
        ]);
    }
}
