import Main from "@/Layouts/Home/Main";
import React, { useEffect } from "react";
import { ArrowLongRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import "aos/dist/aos.css";
import AOS from "aos";
import Iframe from "react-iframe";
import { Head, Link } from "@inertiajs/react";

const Index = (props) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <Head title={props.title}>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="container mx-auto md:my-0 my-4">
                <section className="mx-auto mt-4 lg:mt-10 mb-4 lg:mb-14">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                                className="w-full self-center px-4 lg:w-1/2"
                            >
                                <h1 className="text-base font-semibold text-primary md:text-xl">
                                    Halo Semua 👋, kami
                                    <span className="mt-1 mb-4 block text-4xl font-bold text-black  lg:text-5xl">
                                        Samase
                                    </span>
                                </h1>
                                <p className="mb-5 font-semibold leading-relaxed text-secondary">
                                    Solusi Utama untuk Kesehatan Lambung dan
                                    Usus Anda!
                                </p>
                                <div className="flex justify-start items-start">
                                    <Link
                                        href="/tentang-kami"
                                        type="button"
                                        className="px-4 py-3 text-white bg-[#614a93] hover:bg-[#3a2c58]  rounded-md  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex font-medium"
                                    >
                                        <span>Tentang Kami</span>
                                        &nbsp;
                                        <ArrowLongRightIcon className="h-6 w-6" />
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                                className="w-full self-end px-4 lg:w-1/2"
                            >
                                <div className="relative mt-8 lg:right-0 lg:mt-9">
                                    <img
                                        src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_1_ft0gjr.jpg"
                                        alt="Fillah Samase"
                                        className="relative z-10 mx-auto md:max-w-md max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div
                        className="flex items-center justify-center"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        <h1 className="mb-3 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl ">
                            Produk Kami
                        </h1>
                    </div>
                    <p
                        className="mb-4 px-4 md:px-0 text-center md:text-xl text-sm font-bold tracking-tight leading-none text-gray-900 md:text-1xl "
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        Berikut beberapa produk yang kami sediakan berikut ini :
                    </p>

                    <div className="relative p-2 overflow-auto">
                        <div
                            className="relative mb-4 w-full pb-2 flex gap-3 snap-x snap-mandatory overflow-x-auto scrollbar"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <div className="snap-start snap-always shrink-0">
                                <Link href="/detail-produks">
                                    <div className="rounded shadow-md">
                                        <div className="relative">
                                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                                <h1 className="text-xs lg:text-lg tracking-wider font-bold">
                                                    Fillah Sari Kurma Samase
                                                </h1>
                                            </span>
                                            <div className="w-full flex flex-wrap content-center">
                                                <img
                                                    src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_1_ft0gjr.jpg"
                                                    className="bg-none object-cover max-w-full h-64"
                                                    alt="Fillah Samase"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-start items-start mb-4">
                            <Link
                                href="/produk-kami"
                                type="button"
                                className="px-4 py-3 text-white bg-[#614a93] hover:bg-[#3a2c58] rounded-md  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex font-medium"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                <span>Produk Lainnya</span>
                                &nbsp;
                                <ArrowLongRightIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <h1 className="mb-4 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl ">
                        Alamat Kantor
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div
                        className="w-full lg:w-5/12 flex flex-col text-justify justify-center"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay=""
                    >
                        <div className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl mx-4 lg:mx-auto">
                            <HomeIcon className="h-16 lg:h-20" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    Kantor Sukses Global Mandiri
                                </h5>
                                <p className="mb-3 font-semibold text-gray-900 ">
                                    Taman Bukit Asri Blok B3 No.19 RT.02 RW.09
                                    Kel.Pabuaran Kec.Cibinong - Bogor
                                    <br />
                                    085179705939
                                    <br />
                                    Kode pos 16916
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 px-4 lg:mx-0 mb-4">
                        <div
                            className="relative mt-0"
                            style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay=""
                        >
                            <Iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.474691740995!2d106.84338347380537!3d-6.461385093530171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ea75ecbdb701%3A0x83aba1e55c052bd9!2sJl.%20Taman%20Bukit%20Asri%20No.2%2C%20Pabuaran%2C%20Kec.%20Cibinong%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016916!5e0!3m2!1sen!2sid!4v1711895648230!5m2!1sen!2sid"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                width="100%"
                                height="100%"
                            ></Iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
