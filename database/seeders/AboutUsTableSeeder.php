<?php

namespace Database\Seeders;

use App\Models\AboutUs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AboutUs::create([
            'tentang_kami' => 'tentang kami',
            'image' => 'image',
            'perusahaan_saat_ini' => 'perusahaan saat ini',
            'visi' => 'visi',
            'misi' => 'misi'
        ]);
    }
}
