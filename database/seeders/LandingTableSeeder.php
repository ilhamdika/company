<?php

namespace Database\Seeders;

use App\Models\Landing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LandingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Landing::create([
            'title_hero' => 'Layanan satpam kami tidak hanya melibatkan pengawasan, tetapi juga pencegahan dan respons cepat."',
            'title_hero_sub' => 'Jaga Properti Anda dengan Layanan Satpam Terbaik.',
            'motto_title' => 'Kami memastikan keamanan Anda lebih dari sekedar perlindungan.',
            'motto_sub' => 'Solusi kebutuhan keamanan Anda bukan hanya sekedar perlindungan fisik. Kami melindungi Anda lebih jauh dengan framework terintegrasi yang terdiri dari Plan-Prevent-Protect, solusi komprehensif untuk melindungi aset berharga Anda dan mencegah kerugian.',
            'branding_title' => '25+ tahun menjaga aset Anda di berbagai penjuru negeri.',
            'branding_sub' => 'Dakara didirikan oleh sekelompok lulusan angkatan ke-9 Akademi Kepolisian Indonesia di tahun 1996. Dengan 25+ tahun pengalaman, Dawakara telah dikenal dalam skala global dengan cabang di berbagai wilayah Indonesia.',
        ]);
    }
}
