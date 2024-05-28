<?php

namespace App\Http\Controllers;

use App\Models\SosialMedia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // $produksliders = new ProdukCollection(Produk::inRandomOrder()->get());
        return Inertia::render('Home/Index', [
            'title' => 'Selamat Datang | Samase',
            // "produksliders" => $produksliders,
        ]);
    }
    public function tentang_kami()
    {
        return Inertia::render('Home/AboutUs', [
            'title' => 'Tentang Kami | Samase',
            'sosialmedias' => SosialMedia::all(),
        ]);
    }
    public function produk_kami()
    {
        // $produks = new ProdukCollection(Produk::paginate(5));
        return Inertia::render('Home/ProductUs', [
            'title' => 'Produk Kami | Samase',
            // 'produks' => $produks,
        ]);
    }
    public function testimoni()
    {
        return Inertia::render('Home/Testimoni', [
            'title' => 'Testimoni | Samase',
        ]);
    }
    public function kontak_kami()
    {
        return Inertia::render('Home/ContactUs', [
            'title' => 'Kontak Kami | Samase',
            'sosialmedias' => SosialMedia::all(),
        ]);
    }
    public function details()
    {
        return Inertia::render("Home/Details", [
            "title" => "Rincian Produk | Samase",
        ]);
    }
}
