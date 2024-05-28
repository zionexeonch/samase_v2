import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-slate-50 border-gray-200  font-poppins">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between md:items-center md:mx-14">
                        <div className="mb-6 md:mb-0">
                            <Link
                                href="/"
                                className="flex items-center justify-center md:justify-normal"
                            >
                                <img
                                    src="https://res.cloudinary.com/db5crtdft/image/upload/v1712329981/samase/logo/Fillah%20Samase.png"
                                    className="h-32 sm:h-52 w-auto mr-3"
                                    alt="Samase Logo"
                                />
                                {/* <h2 className="h-9 md:h-14 w-auto text-2xl md:text-4xl uppercase">
                                    samase
                                </h2> */}
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4  font-poppins">
                            <div>
                                <h2 className="mb-5 text-sm font-bold text-[#5c3d1d] uppercase ">
                                    Lainnya
                                </h2>
                                <ul className="text-[#5c3d1d] font-bold">
                                    <li>
                                        <Link
                                            href="/kontak-kami"
                                            className="hover:underline"
                                        >
                                            Hubungi Kami
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-[#3d2829] sm:mx-auto  lg:my-8" />
                    <div className="flex items-center justify-center">
                        <span className="text-1xl text-center text-[#5c3d1d] font-bold">
                            © 2024{" "}
                            <a href="/" className="hover:underline">
                                Samase™
                            </a>
                            . Dibuat dengan sepenuh &#10084;.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
