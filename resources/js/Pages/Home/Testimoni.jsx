import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";
import { Head } from "@inertiajs/react";

const Testimoni = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <Head title={title} />
            <div className="container mx-auto lg:my-0 my-4">
                <div
                    className="mt-5"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h1
                        className="mb-4 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 lg:text-4xl "
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Testimoni
                    </h1>
                </div>
                <div className="mb-4">
                    <p
                        className="text-1xl md:text-2xl text-justify font-semibold text-gray-900 mx-4 "
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-delay="150"
                    >
                        Berikut adalah kesan - kesan dari klien kita :
                    </p>
                </div>
                <section
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="px-4 mx-auto max-w-screen-xl text-center">
                        <div className="grid mb-4 lg:mb-8 gap-4 lg:grid-cols-2">
                            <img
                                src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611139/samase/testimoni/testi_1_yokxdh.png"
                                alt="testimoni1"
                            />
                            <img
                                src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611139/samase/testimoni/testi_2_ayztp5.png"
                                alt="testimoni2"
                            />
                            <img
                                src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611140/samase/testimoni/testi_3_voczkb.png"
                                alt="testimoni3"
                            />
                            <img
                                src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611141/samase/testimoni/testi_4_qpqlrm.png"
                                alt="testimoni4"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

Testimoni.layout = (page) => <Main children={page} />;

export default Testimoni;
