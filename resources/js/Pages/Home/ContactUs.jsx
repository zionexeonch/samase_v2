import Main from "@/Layouts/Home/Main";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Head, usePage } from "@inertiajs/react";

const ContactUs = (props) => {
    const { url } = usePage();
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={props.title} />
            <div className="container md:mx-auto md:py-4 py-2 px-4 mb-4">
                <p
                    className="text-3xl mb-4 font-bold text-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    Kontak Kami
                </p>
                <div className="mx-4 md:mx-0 mb-4">
                    <div
                        className="rounded-lg"
                        id="semua"
                        role="tabpanel"
                        aria-labelledby="semua-tab"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div
                            className="flex items-center justify-center gap-4
                      mb-4"
                        >
                            <div
                                className="grid grid-cols-1 md:grid-cols-2
                      gap-4"
                            >
                                <div
                                    className="p-6 max-w-sm bg-slate-50
                      rounded-lg shadow-md  transform transition duration-300
                      hover:scale-105 hover:bg-slate-300"
                                >
                                    <span
                                        className="mb-2 flex justify-center items-center
                      font-bold tracking-tight text-gray-900 "
                                    >
                                        <img
                                            className="w-40 h-40 object-contain"
                                            src="https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/Gmail_ll54p8.png"
                                            alt="Gmail"
                                        />
                                    </span>
                                    <h5
                                        className="mb-2
                                           text-center text-2xl font-bold
                                           tracking-tight text-gray-900 "
                                    >
                                        Email
                                    </h5>
                                    <div
                                        className="flex justify-center
                                    items-center"
                                    >
                                        <a
                                            href="mailto:samasefillah@gmail.com"
                                            className="inline-flex items-center py-2
                                    px-3 text-sm font-medium text-center
                                    text-white bg-[#614a93] rounded-lg
                                    hover:bg-[#3a2c58] focus:ring-4
                                    focus:outline-none focus:ring-blue-300"
                                            target="_blank"
                                        >
                                            Kirim Pesan
                                            <svg
                                                aria-hidden="true"
                                                className="ml-2 -mr-1 w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20
                                          20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414
                                              0l6 6a1 1 0 010 1.414l-6 6a1 1
                                              0 01-1.414-1.414L14.586 11H3a1
                                              1 0 110-2h11.586l-4.293-4.293a1
                                              1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="p-6
                                                 max-w-sm bg-slate-50
                                                 rounded-lg shadow-md
                                                 transform transition
                                                 duration-300 hover:scale-105
                                                 hover:bg-slate-300"
                                >
                                    <span
                                        className="flex
                                                 justify-center items-center
                                                 font-bold tracking-tight
                                                 text-gray-900  mb-3"
                                    >
                                        <img
                                            className="w-40 h-40
                                                 object-contain"
                                            src="https://res.cloudinary.com/db5crtdft/image/upload/v1712376843/samase/sosial_media/Whatsapp_lkopam.png"
                                            alt="Whatsapp"
                                        />
                                    </span>
                                    <h5
                                        className="mb-2
                                           text-center text-2xl font-bold
                                           tracking-tight text-gray-900 "
                                    >
                                        Telepon / Whatsapp
                                    </h5>
                                    <div
                                        className="flex justify-center
                                    items-center"
                                    >
                                        <a
                                            href="https://wa.me/+6285179705939"
                                            className="inline-flex items-center py-2
                                    px-3 text-sm font-medium text-center
                                    text-white bg-[#614a93] rounded-lg
                                    hover:bg-[#3a2c58] focus:ring-4
                                    focus:outline-none focus:ring-blue-300"
                                            target="_blank"
                                        >
                                            Chat
                                            <svg
                                                aria-hidden="true"
                                                className="ml-2 -mr-1 w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20
                                          20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414
                                              0l6 6a1 1 0 010 1.414l-6 6a1 1
                                              0 01-1.414-1.414L14.586 11H3a1
                                              1 0 110-2h11.586l-4.293-4.293a1
                                              1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p
                            className="text-3xl mb-4
                                                 font-bold text-center"
                        >
                            Media Sosial Kami
                        </p>
                        <div
                            className="flex flex-row
                                                 justify-center items-center
                                                 mb-4"
                        >
                            <div
                                className="grid
                                                 grid-cols-2 md:grid-cols-4
                                                 gap-4 md:gap-16 md:mx-0"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                {props.sosialmedias.map(
                                    (sosialmedia, index) => (
                                        <div
                                            key={index}
                                            className="p-6 max-w-sm bg-slate-50 rounded-lg shadow-md  transform transition duration-300 hover:scale-105 hover:bg-slate-300"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="mb-2">
                                                    <img
                                                        src={
                                                            sosialmedia.url_image
                                                        }
                                                        alt={
                                                            sosialmedia.nama_gambar
                                                        }
                                                        className="w-40 h-40 object-contain"
                                                    />
                                                </div>
                                                <h5 className="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900 ">
                                                    {sosialmedia.nama_gambar}
                                                </h5>

                                                <div className="flex justify-center items-center">
                                                    <a
                                                        href={sosialmedia.link}
                                                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#614a93] rounded-lg hover:bg-[#3a2c58] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                                                        target="_blank"
                                                    >
                                                        {sosialmedia.tombol}
                                                        <svg
                                                            aria-hidden="true"
                                                            className="ml-2 -mr-1 w-4 h-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
ContactUs.layout = (page) => <Main children={page} />;
export default ContactUs;
