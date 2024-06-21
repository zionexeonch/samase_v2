import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";
import { Head, Link } from "@inertiajs/react";

const ProdukUs = (props) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={props.title} />
            <div className="container mx-auto my-4">
                <div className="flex items-center justify-center">
                    <h1 className="mt-4 mb-5 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 lg:text-4xl dark:text-white">
                        Produk Kami
                    </h1>
                </div>
                <div className="mx-4 md:mx-0">
                    <div className="p-4 rounded-lg ">
                        <div
                            className="grid grid-cols-2 mb-4 lg:grid-cols-3 lg:gap-4 gap-11 place-items-center h-full mx-4 md:mx-0"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay=""
                        >
                            <div className="w-36 lg:w-80 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                                <div className="relative ">
                                    <Link href="/detail-produks">
                                        <div className="relative hover:opacity-100 bg-opacity-90 duration-300">
                                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                                                <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                                    Fillah Sari Kurma Samase
                                                </h1>
                                            </span>
                                            <div className="w-full flex flex-wrap content-center">
                                                <img
                                                    src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_1_ft0gjr.jpg"
                                                    className="mx-auto"
                                                    alt="Fillah Samase"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
ProdukUs.layout = (page) => <Main children={page} />;
export default ProdukUs;
