<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\SosialMedia;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        SosialMedia::create([
            "url_image" => "https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/Instagram_r55g12.png",
            "nama_gambar" => "Instagram",
            "tombol" => "Follow IG",
            "link" => "https://www.instagram.com/fillahsamase/",
        ]);
        SosialMedia::create([
            "url_image" => "https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/Tiktok_mdkcti.png",
            "nama_gambar" => "TikTok",
            "tombol" => "Follow TikTok",
            "link" => "https://www.tiktok.com/@fillahsamase?_t=8l5OVU48TuE&_r=1",
        ]);
        SosialMedia::create([
            "url_image" => "https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/X_vh8u8e.png",
            "nama_gambar" => "X (Twitter)",
            "tombol" => "Follow X",
            "link" => "https://twitter.com/fillahsamase?t=ipcu5cql0pfT-Va5d-Vkig&s=09",
        ]);
        SosialMedia::create([
            "url_image" => "https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/Youtube_pfuyoj.png",
            "nama_gambar" => "Youtube",
            "tombol" => "Subscribe",
            "link" => "https://youtube.com/@fillahSamase?si=e5P5NjUpqnpC8_vN",
        ]);
    }
}
