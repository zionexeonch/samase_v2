import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-50 shadow-lg max-w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/">
                            <img
                                className="h-20 lg:h-24 p-3 w-auto"
                                src="https://res.cloudinary.com/db5crtdft/image/upload/v1712329981/samase/logo/Fillah%20Samase.png"
                                alt="Samase Logo"
                            />
                            {/* <h2 className="h-9 md:h-14 w-auto text-2xl md:text-4xl uppercase">
                                samase
                            </h2> */}
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-5 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className={
                                    url === "/"
                                        ? "active text-white bg-[#614a93] rounded block py-2 px-5 font-bold"
                                        : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                                }
                                aria-current="page"
                            >
                                Beranda
                            </Link>

                            <Link
                                href="/tentang-kami"
                                className={
                                    url === "/tentang-kami"
                                        ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                        : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                                }
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/produk-kami"
                                className={
                                    url === "/produk-kami"
                                        ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                        : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                                }
                            >
                                Produk Kami
                            </Link>
                            <Link
                                href="/testimoni"
                                className={
                                    url === "/testimoni"
                                        ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                        : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                                }
                            >
                                Testimoni
                            </Link>
                            <Link
                                href="/kontak-kami"
                                className={
                                    url === "/kontak-kami"
                                        ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                        : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                                }
                            >
                                Kontak
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-[#614a93] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3a2c58] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#4E3B76] focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className={
                                url === "/"
                                    ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                    : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                            }
                            aria-current="page"
                        >
                            Beranda
                        </Link>

                        <Link
                            href="/tentang-kami"
                            className={
                                url === "/tentang-kami"
                                    ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                    : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                            }
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/produk-kami"
                            className={
                                url === "/produk-kami"
                                    ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                    : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                            }
                        >
                            Produk Kami
                        </Link>
                        <Link
                            href="/testimoni"
                            className={
                                url == "/testimoni"
                                    ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                    : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                            }
                        >
                            Testimoni
                        </Link>
                        <Link
                            href="/kontak-kami"
                            className={
                                url === "/kontak-kami"
                                    ? "active text-white  bg-[#614a93] rounded block py-2 px-5 font-bold"
                                    : "text-[#5c3d1d]  hover:text-white hover:bg-[#3a2c58] block py-2 px-5 font-bold"
                            }
                        >
                            Kontak
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
