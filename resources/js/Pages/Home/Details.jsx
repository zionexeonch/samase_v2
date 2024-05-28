import Main from "@/Layouts/Home/Main";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/react";

const Details = (props) => {
    useEffect(() => {
        AOS.refresh();
        const interval = setInterval(() => {
            handleNext();
        }, 2000); // Set interval to change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const produkData = [
        {
            imagePath:
                "https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_2_kht6kt.jpg",
        },
        {
            imagePath:
                "https://res.cloudinary.com/db5crtdft/image/upload/v1716611073/samase/produk/Fillah_Sari_Kurma_Samase_Lambung_2_ibocum.jpg",
        },
        {
            imagePath:
                "https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_1_ft0gjr.jpg",
        },
        {
            imagePath:
                "https://res.cloudinary.com/db5crtdft/image/upload/v1716611080/samase/produk/Fillah_Sari_Kurma_Samase_Lambung_5_ezntd5.jpg",
        },
    ];

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? produkData.length - 1 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === produkData.length - 1 ? 0 : prevSlide + 1
        );
    };

    const handleSlideTo = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <Head title={props.title} />
            <div className="container mx-auto my-4">
                <div className="flex items-center justify-center">
                    <h1 className="mt-4 mb-5 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 lg:text-4xl ">
                        Detail Produk
                    </h1>
                </div>
                <div
                    className="flex flex-warp justify-center mx-4"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div className="flex flex-wrap items-start lg:items-center bg-slate-50 rounded-lg  shadow-md lg:flex-row lg:max-w-xl ">
                        <div
                            id="default-carousel"
                            className="relative w-full"
                            data-carousel="slide"
                        >
                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                {produkData.map((produk, index) => (
                                    <div
                                        key={index}
                                        className={`duration-700 ease-in-out ${
                                            currentSlide === index
                                                ? ""
                                                : "hidden"
                                        }`}
                                        data-carousel-item
                                    >
                                        <img
                                            src={produk.imagePath}
                                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                {produkData.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`w-3 h-3 rounded-full ${
                                            currentSlide === index
                                                ? "bg-[#986567]"
                                                : "bg-[#5b3d3e]"
                                        }`}
                                        aria-current={currentSlide === index}
                                        aria-label={`Slide ${index + 1}`}
                                        onClick={() => handleSlideTo(index)}
                                        data-carousel-slide-to={index}
                                    ></button>
                                ))}
                            </div>
                            <button
                                type="button"
                                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={handlePrev}
                                data-carousel-prev
                            >
                                {/* Tombol sebelumnya */}
                            </button>
                            <button
                                type="button"
                                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={handleNext}
                                data-carousel-next
                            >
                                {/* Tombol selanjutnya */}
                            </button>
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="mb-3 font-normal text-gray-700 ">
                                Deskripsi :
                            </p>
                            <div className="font-semibold text-justify text-base leading-6 text-gray-800 ">
                                <ul className="list-disc mb-4 mx-4">
                                    <li className="md:text-xl text-lg mb-3">
                                        <p className="md:text-base text-sm text-justify">
                                            Diproduksi oleh :
                                        </p>
                                        <p className="md:text-base text-sm text-justify">
                                            CV. Nutrima Sehatalami (Bogor -
                                            Indonesia)
                                        </p>
                                    </li>
                                    <li className="md:text-xl text-lg mb-3">
                                        <p className="md:text-base text-sm text-justify">
                                            Didistribusikan oleh :
                                        </p>
                                        <p className="md:text-base text-sm text-justify">
                                            CV. Sukses Global Mandiri (Bogor -
                                            Indonesia)
                                        </p>
                                    </li>
                                    <li className="md:text-xl text-lg mb-3">
                                        <p className="md:text-base text-sm text-justify">
                                            Catatan :
                                        </p>
                                        <p className="md:text-base text-sm text-justify text-red-500 font-semibold">
                                            Tidak boleh dikonsumsi anak dibawah
                                            umur 2 Tahun
                                        </p>
                                    </li>
                                    <li className="md:text-xl text-lg mb-3">
                                        <p className="md:text-base text-sm text-justify">
                                            Aturan minum :
                                        </p>
                                        <p className="md:text-base text-sm text-justify">
                                            3 kali 2 sendok makan sehari
                                        </p>
                                    </li>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 md:mx-0">
                                        <li className="md:text-xl text-lg">
                                            <p className="md:text-base text-sm text-justify">
                                                Khasiat :
                                            </p>
                                            <div className="md:text-base text-sm text-justify">
                                                <ul className="list-decimal ml-4">
                                                    <li>
                                                        Mengurangi nyeri lambung
                                                    </li>
                                                    <li>
                                                        Menenangkan perut
                                                        kembung
                                                    </li>
                                                    <li>
                                                        Meringankan gejala mual
                                                    </li>
                                                    <li>
                                                        Mengatasi masalah radang
                                                        usus
                                                    </li>
                                                    <li>
                                                        Mengobati liver & gerd
                                                    </li>
                                                    <li>
                                                        Membantu proses
                                                        pencernaan
                                                    </li>
                                                    <li>
                                                        Mengobati radang usus
                                                    </li>
                                                    <li>
                                                        Meningkatkan asupan
                                                        nutrisi
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="md:text-xl text-lg mb-3">
                                            <p className="md:text-base text-sm text-justify">
                                                Komposisi :
                                            </p>
                                            <div className="md:text-base text-sm text-justify">
                                                <ul className="list-decimal ml-4">
                                                    <li>
                                                        Phoenix dactylifera
                                                        fructus ekstrak 11.25 gr
                                                    </li>
                                                    <li>
                                                        Mel depuratum 2.10 gr
                                                    </li>
                                                    <li>
                                                        Curcuma domestica
                                                        rhizoma ekstrak 450 mg
                                                    </li>
                                                    <li>
                                                        Zingiber officinale
                                                        rhizoma ekstrak 300 mg
                                                    </li>
                                                    <li>
                                                        Kaempferia galanga
                                                        rhizoma ekstrak 150 mg
                                                    </li>
                                                    <li>
                                                        Andrographis paniculata
                                                        ekstrak 300 mg
                                                    </li>
                                                    <li>
                                                        Cinnamomum burmannii
                                                        cortex ekstrak 300 mg
                                                    </li>
                                                    <li>
                                                        Mentha arvensis folium
                                                        ekstrak 80 mg
                                                    </li>
                                                    <li>
                                                        Oleum Nigella sativa
                                                        semen 80 mg
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className="lg:mb-5 mb-3 font-normal text-gray-700 flex items-center justify-center">
                                <Link
                                    href="/kontak-kami"
                                    type="button"
                                    className="px-4 py-3 lg:px-10 lg:py-4 text-white bg-[#614a93] hover:bg-[#3a2c58] rounded-md outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform font-medium lg:text-lg"
                                >
                                    <span>Pesan Segera</span>
                                </Link>
                            </div>
                            <span>
                                <Link
                                    href="/produk-kami"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#614a93] hover:bg-[#3a2c58] focus:shadow-outline focus:outline-none"
                                >
                                    <ArrowLeftIcon className="h-6" />
                                    &nbsp; Kembali
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Details.layout = (page) => <Main children={page} />;
export default Details;
